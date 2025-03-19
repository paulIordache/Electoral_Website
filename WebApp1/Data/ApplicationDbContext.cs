using Microsoft.EntityFrameworkCore;
using WebApp1.Models;


public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    { }

    public DbSet<Candidate> Candidates { get; set; }
    public DbSet<Party> Parties { get; set; }
    public DbSet<Vote> Votes { get; set; }
    public DbSet<County> Counties { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Candidate>().ToTable("candidates");
        modelBuilder.Entity<Candidate>().Property(c => c.Id).HasColumnName("candidateid");
        modelBuilder.Entity<Candidate>().Property(c => c.Name).HasColumnName("name");
        modelBuilder.Entity<Candidate>().Property(c => c.description).HasColumnName("description");
        modelBuilder.Entity<Candidate>().Property(c => c.PartyId).HasColumnName("partyid");

        modelBuilder.Entity<Party>().ToTable("parties");
        modelBuilder.Entity<Party>().Property(p => p.PartyId).HasColumnName("partyid");
        modelBuilder.Entity<Party>().Property(p => p.Name).HasColumnName("name");

        // Configure the relationship
        modelBuilder.Entity<Candidate>()
            .HasOne(c => c.Party)
            .WithMany() // Since each Party can have many Candidates, no navigation property needed on Party side
            .HasForeignKey(c => c.PartyId);
        
        
        
        
        
        modelBuilder.Entity<Vote>().ToTable("votes");
        modelBuilder.Entity<Vote>().Property(v => v.VoteId).HasColumnName("voteid");
        modelBuilder.Entity<Vote>().Property(v => v.CandidateId).HasColumnName("candidateid");
        modelBuilder.Entity<Vote>().Property(v => v.CountyId).HasColumnName("countyid");
        modelBuilder.Entity<Vote>().Property(v => v.Votes).HasColumnName("votescount");

        modelBuilder.Entity<County>().ToTable("counties");
        modelBuilder.Entity<County>().Property(c => c.CountyId).HasColumnName("countyid");
        modelBuilder.Entity<County>().Property(c => c.Name).HasColumnName("name");

    // Relationships
        modelBuilder.Entity<Vote>()
            .HasOne(v => v.Candidate)
            .WithMany()
            .HasForeignKey(v => v.CandidateId);

        modelBuilder.Entity<Vote>()
            .HasOne(v => v.County)
            .WithMany(c => c.Votes)
            .HasForeignKey(v => v.CountyId);
    }
}


