using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EastBarley.Models
{
    public class Invoices
    {
        public int InvoiceId { get; set; }
        public int UserId { get; set; }
        public decimal TotalCost { get; set; }
        public int PaymentId { get; set; }
        public DateTime InvoiceDate { get; set; }
        public string BillingAddrress { get; set; }
        public string BillingCity { get; set; }
        public int BillingZip { get; set; }
        public string BillingState { get; set; }
        public int StatusId { get; set; }
        public int SalesRepId { get; set; }


    }
}
