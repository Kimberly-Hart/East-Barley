using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EastBarley.DataAccess;
using EastBarley.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EastBarley.Controllers
{
    [Route("api/invoices/")]
    [ApiController]
    public class InvoicesController : ControllerBase
    {
        InvoicesRepository _repository;

        public InvoicesController(InvoicesRepository repository)
        {
            _repository = repository;
        }
        // get all invoices
        [HttpGet]
        public IActionResult GetAllOrders()
        {
            var allInvoices = _repository.GetAllInvoices();
            var noInvoices = !allInvoices.Any();
            if (noInvoices)
            {
                return NotFound("There are currently no invoices.");
            }
            return Ok(allInvoices);
        }
        [HttpGet("users/{userId}")]
        public IActionResult GetInvoicesByUserId(int userId)

        {
            var invoicesByUserId = _repository.GetInvoicesByUserId(userId);
            var noInvoicesByUserId = !invoicesByUserId.Any();
            if (noInvoicesByUserId)
            {
                return NotFound("There are currently no orders for this user.");
            }
            return Ok(invoicesByUserId);
        }
    }
}