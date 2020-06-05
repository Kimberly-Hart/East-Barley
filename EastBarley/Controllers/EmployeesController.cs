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
    [Route("api/eastbarley")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        EmployeesRepository _repository;

        public EmployeesController(EmployeesRepository repository)
        {
            _repository = repository;
        }
        // get all employees
        [HttpGet("employees/all/")]
        public IActionResult GetAllEmployees()
        {
            var employees = _repository.GetAllEmployees();

            return Ok(employees);
        }
    }
}