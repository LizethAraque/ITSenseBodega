using System.ComponentModel.DataAnnotations;

namespace ITSense_Bodega
{
    public class Product
    {
        public int Id { get; set; }
        
        [StringLength(100)]
        public string Status { get; set; } = string.Empty;

        public int Stock { get; set; } 

        public int ProductTypeId { get; set; }

        public ProductType? ProductType { get; set; }
       
    }
}
