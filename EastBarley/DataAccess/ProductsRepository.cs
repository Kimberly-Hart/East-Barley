﻿using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
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

        public IEnumerable<Products> GetAllBeer()
        {
            var sql = @"SELECT p.*
                        FROM Products p
                            WHERE ProductTypesTableId = 2";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.Query<Products>(sql);
                return result;
            }
        }

        public Products GetBeerById(int productId)
        {
            var sql = @"SELECT p.*
                               FROM Products p
                                WHERE p.productTypesTableId = 2 AND p.productId = @productId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { productId = productId };
                var result = db.QueryFirstOrDefault<Products>(sql, parameters);
                return result;
            }
        }

        public IEnumerable<ProductBookDetails> GetAllBooks()
        {
            var sql = @"SELECT p.*, bd.*
                            FROM Products p
                                join BookDetails bd
                                on p.productId = bd.productId
                             WHERE p.ProductTypesTableId = 1";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.Query<ProductBookDetails>(sql);
                return result;
            }
        }

        public ProductBookDetails GetSingleBook(int productId)
        {
            var sql = @"SELECT p.*, bd.*
                            FROM Products p
                                join BookDetails bd
                                on p.productId = bd.productId
                             WHERE p.ProductTypesTableId = 1
                             AND p.ProductId = @productId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { ProductId = productId };
                var result = db.QueryFirstOrDefault<ProductBookDetails>(sql, parameters);
                return result;
            }
        }
        public Products UpdateProductQuantity(ProductQuantityUpdate product)
        {
            var sql = @"update Products
                      set Quantity = Quantity + @NewQuantity
                      output inserted.*
                      where ProductId = @ProductId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new
                {
                    NewQuantity = product.Quantity,
                    ProductId = product.ProductId
                };
                return db.QueryFirstOrDefault<Products>(sql, parameters);
            }
        }

        public Products GetAnyProductById(int productId)
        {
            var sql = @"SELECT p.*
                               FROM Products p
                                WHERE p.productId = @productId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { productId = productId };
                var result = db.QueryFirstOrDefault<Products>(sql, parameters);
                return result;
            }
        }
    }

}
   


