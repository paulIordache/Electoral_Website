using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp1.Models;

public class Candidate
{
     [Column("candidateid")]
     public int Id { get; set; }
     [Column("name")]
     public string Name { get; set; } = string.Empty;
     [Column("partyid")]
     public int PartyId { get; set; } // Assuming this is a foreign key to a Party table\
     [Column("description")]
     public string description { get; set; } = string.Empty;
     public Party Party { get; set; }  // Navigation property
}