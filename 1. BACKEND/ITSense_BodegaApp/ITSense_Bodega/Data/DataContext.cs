using Microsoft.EntityFrameworkCore;

namespace ITSense_Bodega.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        
        public DbSet<ProductType> ProductTypes { get; set; }

        public DbSet<Status> Statuses { get; set; }
        public DbSet<ProductSalida> ProductSalida { get; set; }

    }
}
