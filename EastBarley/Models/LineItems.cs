using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EastBarley.Models
{
    public class LineItems
    {
        public int LineItemId { get; set; }
        public int ProductId { get; set; }
        public int InvoiceId { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
