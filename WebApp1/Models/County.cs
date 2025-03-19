namespace WebApp1.Models;

public class County
{
    public int CountyId { get; set; }
    public string Name { get; set; }

    public ICollection<Vote> Votes { get; set; }
}
