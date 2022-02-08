#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ITSense_Bodega;
using ITSense_Bodega.Data;

namespace ITSense_Bodega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductSalidasController : ControllerBase
    {
        private readonly DataContext _context;

        public ProductSalidasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/ProductSalidas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductSalida>>> GetProductSalida()
        {
            return await _context.ProductSalida.ToListAsync();
        }

        // GET: api/ProductSalidas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductSalida>> GetProductSalida(int id)
        {
            var productSalida = await _context.ProductSalida.FindAsync(id);

            if (productSalida == null)
            {
                return NotFound();
            }

            return productSalida;
        }

        // PUT: api/ProductSalidas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductSalida(int id, ProductSalida productSalida)
        {
            if (id != productSalida.Id)
            {
                return BadRequest();
            }

            _context.Entry(productSalida).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductSalidaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProductSalidas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProductSalida>> PostProductSalida(ProductSalida productSalida)
        {
            _context.ProductSalida.Add(productSalida);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductSalida", new { id = productSalida.Id }, productSalida);
        }

        // DELETE: api/ProductSalidas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductSalida(int id)
        {
            var productSalida = await _context.ProductSalida.FindAsync(id);
            if (productSalida == null)
            {
                return NotFound();
            }

            _context.ProductSalida.Remove(productSalida);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductSalidaExists(int id)
        {
            return _context.ProductSalida.Any(e => e.Id == id);
        }
    }
}
