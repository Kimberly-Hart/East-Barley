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
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        ProductsRepository _repository;

        public ProductsController(ProductsRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("whiskey/all")]
        public IActionResult GetAllWhiskey()

        {
            var allWhiskey = _repository.GetAllWhiskey();
            var noWhiskey = !allWhiskey.Any();
            if (noWhiskey)
            {
                return NotFound("There is currently no whiskey to be listed.");
            }
            return Ok(allWhiskey);
        }

        [HttpGet("whiskey/{productId}")]
        public IActionResult GetWhiskeyById(int productId)
        {
            var singleWhiskey = _repository.GetWhiskeyById(productId);
            if (singleWhiskey == null)
            {
                return NotFound("That whiskey doesn't exist.");
            }
            return Ok(singleWhiskey);
        }
    
        [HttpGet("beer/all")]
        public IActionResult GetAllBeer()
        {
            var allBeer = _repository.GetAllBeer();
            var noBeer = !allBeer.Any();
            if (noBeer)
            {
                return NotFound("There is currently no beer to be listed.");
            }
            return Ok(allBeer);
        }

        [HttpGet("beer/{productId}")]
        public IActionResult GetBeerById(int productId)
        {
            var singleBeer = _repository.GetBeerById(productId);
            if (singleBeer == null)
            {
                return NotFound("That beer doesn't exist.");
            }
            return Ok(singleBeer);
            
        }

        [HttpGet("books/all")]
        public IActionResult GetBooks()
        {
            var books = _repository.GetAllBooks();
            var noBooks = !books.Any();
            if (noBooks)
            {
                return NotFound("No books were found");
            }
            return Ok(books);
        }

        [HttpGet("books/{productId}")]
        public IActionResult GetSingleBook(int productId)

        {
            var singleBook = _repository.GetSingleBook(productId);
            if (singleBook == null)
            {
                return NotFound("No books matched this search");
            }
            return Ok(singleBook);
        }
    }
}
