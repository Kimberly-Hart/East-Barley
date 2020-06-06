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
    [Route("api/employees/")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        EmployeesRepository _repository;

        public EmployeesController(EmployeesRepository repository)
        {
            _repository = repository;
        }
        // get all employees
        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            var employees = _repository.GetAllEmployees();
            var noEmployees = !employees.Any();
            if (noEmployees)
            {
                return NotFound("There are currently no employees.");
            }
            return Ok(employees);
        }

        [HttpGet("{salesRepId}")]
        public IActionResult GetSingleEmployee(int salesRepId)

        {
            var singleEmployee = _repository.GetASingleEmployee(salesRepId);
            if (singleEmployee == null)
            {
                return NotFound("Employee Does Not Exist.");
            }
            return Ok(singleEmployee);
        }
    }
}