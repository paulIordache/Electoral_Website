using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;


namespace WebApp1.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoteResultsController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<VoteResultsController> _logger;

    public VoteResultsController(ApplicationDbContext context, ILogger<VoteResultsController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> GetVoteResults()
    {
        try
        {
            _logger.LogInformation("Starting to fetch vote results from the database.");

            // Fetch votes with related candidate and county data
            var votes = await _context.Votes
                .Include(v => v.Candidate)
                    .ThenInclude(c => c.Party)
                .Include(v => v.County)
                .ToListAsync();

            _logger.LogInformation($"Fetched {votes.Count} vote records from the database.");

            if (votes == null || !votes.Any())
            {
                _logger.LogWarning("No vote results found in the database.");
                return NotFound("No vote results found.");
            }

            // Group and transform the data
            var results = votes
                .GroupBy(v => new
                {
                    v.County.CountyId,
                    CountyName = v.County.Name,
                    CandidateName = v.Candidate.Name
                })
                .Select(g => new
                {
                    CountyId = g.Key.CountyId,
                    CountyName = g.Key.CountyName,
                    CandidateName = g.Key.CandidateName,
                    TotalVotes = g.Sum(v => v.Votes)
                })
                .ToList();

            _logger.LogInformation($"Processed {results.Count} grouped vote results.");

            return Ok(results);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while fetching vote results.");
            return BadRequest($"Error: {ex.Message}");
        }
    }
}
