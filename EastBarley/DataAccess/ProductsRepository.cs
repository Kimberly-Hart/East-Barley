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
    public class ProductsRepository
    {
        string ConnectionString;
        public ProductsRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("EastBarley");
        }
    }
}
