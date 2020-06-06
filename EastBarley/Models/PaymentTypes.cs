using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EastBarley.Models
{
    public class PaymentTypes
    {
        public int PaymentId { get; set; }
        public int UserId { get; set; }
        public string PaymentType { get; set; }
        public long AccountNumber { get; set; }
        public int ExpirationYear { get; set; }
        public int ExpirationMonth { get; set; }
        public bool isActive { get; set; }
    }
}
