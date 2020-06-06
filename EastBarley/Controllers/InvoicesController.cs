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

        [HttpPost("newCart")]
        public IActionResult CreateNewOrder(int UserId, LineItems lineItemToAdd)
        {
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

            var newLineItem = _repository.AddLineItem(cart.InvoiceId, lineItemToAdd);
            if (newLineItem == null)
            {
                return NotFound("There was an error adding this item to your cart. Please try again.");
            }
            return Ok(cart);
        }
    }
}