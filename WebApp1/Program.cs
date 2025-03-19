using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add database context with connection string (PostgreSQL example)
builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
            .EnableSensitiveDataLogging()  // Logs SQL queries
            .LogTo(Console.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information)  // Log queries to the console
);

// Add controllers
builder.Services.AddControllers();

// Add CORS configuration (for frontend access)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

builder.Services.AddLogging(logging =>
{
    logging.AddConsole(); // Enable console logging
    logging.AddDebug();   // Enable debug logging
});

var app = builder.Build();

// Enable CORS middleware (after building the app)
app.UseCors("AllowAll");

// Use HTTPS Redirection (optional, but recommended)
app.UseHttpsRedirection();

// Map controller routes
app.MapControllers();

// Run the app
app.Run();