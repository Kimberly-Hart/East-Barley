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
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        UsersRepository _repository;

        public UsersController(UsersRepository repository)
        {
            _repository = repository;
        }
        
    //**Get All Users**
    [HttpGet("all")]
    public IActionResult GetAllUsers()
        {
            var allUsers = _repository.GetAllUsers();
            var isEmpty = !allUsers.Any();
            if (isEmpty)
            {
                return NotFound("No users were found");
            }
            return Ok(allUsers);
        }


        //** Get User By ID
        [HttpGet("{id}")]
        public IActionResult GetUserById(int id)
        {
            var user = _repository.GetUserById(id);
            if (user == null) return NotFound("User Does Not Exist");
            return Ok(user);
        }
    }
}