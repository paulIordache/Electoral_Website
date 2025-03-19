using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class CandidatesController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<CandidatesController> _logger;

    public CandidatesController(ApplicationDbContext context, ILogger<CandidatesController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> GetCandidates()
    {
        try
        {
            _logger.LogInformation("Starting to fetch candidates from the database.");

            // Fetch candidates from the database with their associated party data
            var candidates = await _context.Candidates
                .Include(c => c.Party) // Eagerly load the related Party data
                .ToListAsync();

            // Log the count of candidates fetched
            _logger.LogInformation($"Fetched {candidates.Count} candidates from the database.");

            if (candidates == null || !candidates.Any())
            {
                _logger.LogWarning("No candidates found in the database.");
                return NotFound("No candidates found.");
            }

            // Transform the data to include Party name instead of PartyId
            var result = await _context.Candidates
                .Include(c => c.Party) // Eagerly load the related Party entity
                .Select(c => new
                {
                    c.Id,
                    c.Name,
                    c.description,
                    PartyName = c.Party.Name // Access Party name from the navigation property
                })
                .ToListAsync();

            return Ok(result); // Return candidates with party names as JSON
        }
        catch (Exception ex)
        {
            // Log the error
            _logger.LogError(ex, "An error occurred while fetching candidates.");
            return BadRequest($"Error: {ex.Message}");
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCandidate(int id)
    {
        try
        {
            // Fetch a single candidate by ID with their associated party data
            var candidate = await _context.Candidates
                                          .Include(c => c.Party)  // Eagerly load the related Party data
                                          .FirstOrDefaultAsync(c => c.Id == id);

            if (candidate == null)
            {
                _logger.LogWarning($"Candidate with ID {id} not found.");
                return NotFound();
            }

            // Return candidate with party name instead of PartyId
            var result = new
            {
                candidate.Id,
                candidate.Name,
                PartyName = candidate.Party.Name  // Return the Party name instead of the PartyId
            };

            return Ok(result); // Return the candidate with party name as JSON
        }
        catch (Exception ex)
        {
            // Log the error
            _logger.LogError(ex, "An error occurred while fetching the candidate.");
            return BadRequest($"Error: {ex.Message}");
        }
    }
}
