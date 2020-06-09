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
        UsersRepository _userRepository;

        public InvoicesController(InvoicesRepository repository, UsersRepository userRepo)
        {
            _repository = repository;
            _userRepository = userRepo;
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

        // get invoices by userId
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

        // get single invoice by invoiceId
        [HttpGet("invoiceid/{invoiceId}")]
        public IActionResult GetInvoicesByInvoiceId(int invoiceId)

        {
            var invoicesByInvoiceId = _repository.GetInvoicesByInvoiceId(invoiceId);
            var noInvoicesByInvoiceId = !invoicesByInvoiceId.Any();
            if (noInvoicesByInvoiceId)
            {
                return NotFound("There are currently no invoices matching this invoice id.");
            }
            return Ok(invoicesByInvoiceId);
        }

        // get invoices by billing state
        [HttpGet("state/{billingState}")]
        public IActionResult GetInvoicesByStateAbbr(string billingState)

        {
            var invoicesByBillingState = _repository.GetInvoicesByStateAbbr(billingState);
            var noInvoicesByBillingState = !invoicesByBillingState.Any();
            if (noInvoicesByBillingState)
            {
                return NotFound("There are currently no invoices for this state.");
            }
            return Ok(invoicesByBillingState);
        }

        // get payment types by user
        [HttpGet("paymentType/{userId}")]
        public IActionResult GetUserPayTypes(int userId)
        {
            var findUser = _userRepository.GetUserById(userId);
            if (findUser == null)
            {
                return NotFound("This user could not be found.");
            }
            var PaymentOptions = _repository.GetPaymentTypesByUser(userId);
            var noSavedPayTypes = !PaymentOptions.Any();
            if (noSavedPayTypes)
            {
                return NotFound("You do not have any saved payment types, please create a new one.");
            }
            return Ok(PaymentOptions);
        }

        [HttpPost("paymentType/add")]
        public IActionResult GetUserPayTypes(PaymentTypes paymentToAdd)
        {
            var newPaymentType = _repository.AddPaymentType(paymentToAdd);
            if (newPaymentType == null)
            {
                return BadRequest("Your payment type could not be added at this time.");
            }
            return Created("", newPaymentType);
        }

        [HttpPut("PaymentType/delete/{paymentId}")]
        public IActionResult DeactivatePaymentMethod(int paymentId)
        {
            var paymentToDelete = _repository.DeactivatePaymentMethod(paymentId);
            if (paymentToDelete == 0)
            {
                return NotFound("There is no payment method matching this query.");
            }
            return Ok("The payment has been deleted");
        }

        // starts a new invoice at Open Cart status
        [HttpPost("newCart/{UserId}")]
        public IActionResult CreateNewOrder(int UserId, LineItems lineItemToAdd)
        {
            var findUser = _userRepository.GetUserById(UserId);
            if (findUser == null)
            {
                return NotFound("This user could not be found.");
            }
            var hasCart = _repository.CheckForCart(UserId);
            var totalCost = lineItemToAdd.Price * lineItemToAdd.Quantity;
            OrderCart cart;
            if (hasCart != null)
            {
                cart = _repository.AddToExistingCart(hasCart.InvoiceId, totalCost);
            }
            else
            {
                cart = _repository.StartNewOrder(UserId, totalCost);
            }
            lineItemToAdd.InvoiceId = cart.InvoiceId;
            var newLineItem = _repository.AddLineItem(lineItemToAdd);
            if (newLineItem == null)
            {
                return NotFound("There was an error adding this item to your cart. Please try again.");
            }
            return Created("", cart);
        }
    }
}