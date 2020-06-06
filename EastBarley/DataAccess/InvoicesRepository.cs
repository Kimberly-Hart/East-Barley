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


        public IEnumerable<Invoices> GetInvoicesByUserId(int userId)
        {
            var sql = @"SELECT *
                        FROM Invoice
                        WHERE UserId = @userId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { UserId = userId };
                var result = db.Query<Invoices>(sql, parameters);
                return result;
            }
        }

        public IEnumerable<Invoices> GetInvoicesByInvoiceId(int invoiceId)
        {
            var sql = @"SELECT *
                        FROM Invoice
                        WHERE InvoiceId = @invoiceId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { InvoiceId = invoiceId };
                var result = db.Query<Invoices>(sql, parameters);
                return result;
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

        public PaymentTypes AddPaymentType(PaymentTypes paymentToAdd)
        {
            var sql = @"Insert into Payments([UserId], PaymentType, AccountNumber, ExpirationYear, ExpirationMonth, isActive)
                            output inserted.*
		                        values(@UserId, @PaymentType, @AccountNumber, @ExpirationYear, @ExpirationMonth, @isActive)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<PaymentTypes>(sql, paymentToAdd);
                return result;
            }
        }
    }
}
