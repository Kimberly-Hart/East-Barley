using Dapper;
using EastBarley.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace EastBarley.DataAccess
{
    public class EmployeesRepository
    {
        string ConnectionString;
        public EmployeesRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("EastBarley");
        }
        public IEnumerable<Employees> GetAllEmployees()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Employees>("SELECT * FROM Employees");
            }
        }
    }
}
