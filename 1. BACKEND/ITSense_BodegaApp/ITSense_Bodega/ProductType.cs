using System.ComponentModel.DataAnnotations;

namespace ITSense_Bodega
{
    public class ProductType
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string ProductName { get; set; } = string.Empty;
    }
}
