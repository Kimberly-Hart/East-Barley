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

        //// Get User By email for the following method
        //public IActionResult GetUserByEmail(string email)
        //{
        //    var user = _repository.GetUserByEmail(email);
        //    if (user == null) return NotFound("User Does Not Exist. Consider making an account.");
        //    return Ok(user);
        //}s

        // create/update a new/existing user
        [HttpPost]
        public IActionResult CreateNewUser(Users userToAdd)
        {
            var existingUser = _repository.GetUserByEmail(userToAdd.Email);
            if (existingUser == null)
            {
                var newUser = _repository.CreateNewUser(userToAdd);
                return Ok(newUser);
            }
            else
            {
                return Problem("An account with this email already exists. Try resetting your password.");
            }
        }

    [HttpDelete("{userId}")]
    public IActionResult DeactivateAUser(int userId)
        {
            var didItWork = _repository.DeactivateUser(userId);
            if (didItWork)
            {
                return Ok(userId);
            }
            else
            {
                return Problem("No user was found to deactivate");
            }
        }
    }
}