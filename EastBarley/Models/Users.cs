using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EastBarley.Models;
using EastBarley.DataAccess;

namespace EastBarley.Models
{
    public class Users
    {
        public int UserId { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Email { get; set; }
        public DateTime DateAccountCreated { get; set; }
        public bool isOver21 { get; set; }
        public bool isAcctActive { get; set; }
    }
}
