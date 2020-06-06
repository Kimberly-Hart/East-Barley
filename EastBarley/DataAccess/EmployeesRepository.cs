using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using EastBarley.Models;
using Dapper;

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

        public Employees GetASingleEmployee(int salesRepId)
        {
            var sql = @"SELECT *
                            FROM [employees]
                            WHERE [employees].salesRepId = @salesRepId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { salesRepId = salesRepId };
                return db.QueryFirstOrDefault<Employees>(sql, parameters);
            }
        }
    }
}
