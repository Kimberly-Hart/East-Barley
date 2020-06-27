using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EastBarley.Models
{
    public class Employees
    {
        public int SalesRepId { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public DateTime HireDate { get; set; }
        public string Email { get; set; }

    }
}
