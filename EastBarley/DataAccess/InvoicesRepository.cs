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
    }
}
