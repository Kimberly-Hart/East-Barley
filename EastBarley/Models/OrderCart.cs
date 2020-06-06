using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EastBarley.Models
{
    public class OrderCart
    {
        public int InvoiceId { get; set; }
        public int UserId { get; set; }
        public decimal TotalCost { get; set; }
        public int StatusId { get; set; }
    }
}
