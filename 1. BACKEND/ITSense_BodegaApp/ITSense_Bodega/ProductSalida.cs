namespace ITSense_Bodega
{
    public class ProductSalida
    {
        public int Id { get; set; }
        public int ProductTypeId { get; set; }
        public ProductType? ProductType { get; set; }
        public int Cantidad { get; set; }
    }
}
