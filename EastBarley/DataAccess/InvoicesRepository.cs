using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using EastBarley.Models;
using Dapper;

namespace EastBarley.DataAccess
{
    public class InvoicesRepository
    {
        string ConnectionString;
        public InvoicesRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("EastBarley");
        }

        public IEnumerable<Invoices> GetAllInvoices()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Invoices>("SELECT * FROM Invoice");
            }
        }

        public IEnumerable<PaymentTypes> GetPaymentTypesByUser(int userId)
        {
            var sql = @"SELECT *
                        FROM Payments
                        WHERE UserId = @userId
                        AND isActive = 1";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { UserId = userId };
                var result = db.Query<PaymentTypes>(sql, parameters);
                return result;
            }
        }

        public OrderCart CheckForCart(int userId)
        {
            var sql = @"select UserId, TotalCost, Status
                                 from Invoice
                                 where UserId = @userId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { UserId = userId }
                var result = db.QueryFirstOrDefault<OrderCart>(sql, parameters);
                return result;
            }
        }

        public OrderCart StartNewOrder(int userId, decimal totalCost)
        {
            var sql = @"insert into Invoice(UserId, TotalCost, Status)
                                output inserted *
                                values(@userId, @totalCost, 'InProgress')";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = { UserId = userId, TotalCost = totalCost };
                var result = db.QueryFirstOrDefault<OrderCart>(sql, parameters);
                return result;
            }
        }

        public LineItems AddLineItem(int invoiceId, LineItems lineItemToAdd)
        {
            var sql = @"insert into LineItems(ProductId, InvoiceId, Price, Quantity)
                                output inserted *
                                values(@productId, @invoiceId, @price, @quantity)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<LineItems>(sql, lineItemToAdd);
                return result;
            }
        }

        public OrderCart AddToExistingCart(int invoiceId, decimal totalCost)
        {
            throw new NotImplementedException();
        }
    }
}
