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

        public IEnumerable<Products> GetAllWhiskey()
        {
            var sql = @"SELECT p.*
                        FROM Products p
                            WHERE ProductTypesTableId = 3";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.Query<Products>(sql);
                return result;
            }
        }

        public Products GetWhiskeyById(int productId)
        {
            var sql = @"SELECT p.*
                                FROM Products p
                                WHERE p.productTypesTableId = 3 AND p.productId = @productId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { productId = productId };
                var result = db.QueryFirstOrDefault<Products>(sql, parameters);
                return result;
            }
        }


    }
}
