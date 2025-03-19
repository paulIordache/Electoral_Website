using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp1.Models;

public class Vote
{
    [Column("voteid")]
    public int VoteId { get; set; }
    [Column("candidateid")]

    public int CandidateId { get; set; }
    [Column("countyid")]

    public int CountyId { get; set; }
    [Column("votescount")]

    public int Votes { get; set; }

    public Candidate Candidate { get; set; }
    public County County { get; set; }
}