using Microsoft.EntityFrameworkCore;

namespace PaymentAPI.Models
{
    public class PaymentModelDbContext : DbContext
    {
        public PaymentModelDbContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("sqlConnection");
            }
        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
