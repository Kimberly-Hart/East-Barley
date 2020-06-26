using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using EastBarley.Models;
using EastBarley.DataAccess;
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

        public IEnumerable<Invoices> GetInvoicesByStateAbbr(string billingState)
        {
            var sql = @"SELECT *
                        FROM Invoice
                        WHERE BillingState = @billingState";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { BillingState = billingState };
                var result = db.Query<Invoices>(sql, parameters);
                return result;
            }
        }

        public IEnumerable<Invoices> GetInvoicesByStatus(int statusId)
        {
            var sql = @"SELECT *
                        FROM Invoice
                        WHERE StatusId = @statusId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { StatusId = statusId };
                var result = db.Query<Invoices>(sql, parameters);
                return result;
            }
        }

        public IEnumerable<Invoices> GetInvoicesBySalesRepId(int salesRepId)
        {
            var sql = @"SELECT *
                        FROM Invoice
                        WHERE SalesRepId = @salesRepId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { SalesRepId = salesRepId };
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

        public int DeactivatePaymentMethod(int paymentId)
        {
            var sql = @"Update Payments
                            set isActive = 0
		                        where Payments.PaymentId = @paymentId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { paymentId = paymentId };
                var result = db.Execute(sql, parameters);
                return result;
            }
        }

        public OrderCart CheckForCart(int userId)
        {
            var sql = @"select UserId, TotalCost, StatusId
                                 from Invoice
                                 where UserId = @userId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { UserId = userId };
                var result = db.QueryFirstOrDefault<OrderCart>(sql, parameters);
                return result;
            }
        }

        public OrderCart StartNewOrder(int userId, decimal totalCost)
        {
            var sql = @"insert into Invoice(UserId, TotalCost, StatusId)
                        output inserted.*
                        values(@userId, @totalCost, 1)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { UserId = userId, TotalCost = totalCost };
                var result = db.QueryFirstOrDefault<OrderCart>(sql, parameters);
                return result;
            }
        }

        public LineItems AddLineItem(LineItems lineItemToAdd)
        {
            var sql = @"insert into LineItems(ProductId, InvoiceId, Price, Quantity)
                                output inserted.*
                                values(@productId, @invoiceId, @price, @quantity)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<LineItems>(sql, lineItemToAdd);
                return result;
            }
        }

        // WIP
        public OrderCart FindOpenCarts(int userId)
        {
            var sql = @"SELECT *
                        FROM Invoice
                        WHERE UserId = @userId
                        AND StatusId = 1";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { UserId = userId };
                var result = db.QueryFirstOrDefault<OrderCart>(sql, parameters);
                return result;
            }
        }

        public OrderCart UpdateTotalCost(decimal totalCost, int invoiceId)
        {
            var sql = @"UPDATE Invoice
                        SET TotalCost = TotalCost - @totalCost
                        output inserted .*
                        WHERE InvoiceId = @invoiceId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { TotalCost = totalCost, InvoiceId = invoiceId };
                var result = db.QueryFirstOrDefault<OrderCart>(sql, parameters);
                return result;
            }
        }

        public OrderCart AddToExistingCart(int invoiceId, decimal totalCost)
        {
            var sql = @"UPDATE Invoice
                        SET TotalCost = TotalCost + @totalCost
						output inserted .*
                        WHERE Invoice.InvoiceId = @invoiceId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { InvoiceId = invoiceId, TotalCost = totalCost };
                var result = db.QueryFirstOrDefault<OrderCart>(sql, parameters);
                return result;
            }
        }

        // WIP
        public LineItems ChangeLineItemQty(int newQuantity, int lineItemId)
        {
            var sql = @"UPDATE LineItems
                        SET Quantity = @NewQuantity
                        output inserted .*
                        WHERE LineItemId = @LineItemId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { NewQuantity = newQuantity, LineItemId = lineItemId };
                var result = db.QueryFirstOrDefault<LineItems>(sql, parameters);

                return result;
            }
        }
        // WIP
        public IEnumerable<LineItems> GetLineItem(int invoiceId)
        {
            var sql = @"SELECT *
                        FROM LineItems
                        WHERE LineItems.InvoiceId = @invoiceId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { InvoiceId = invoiceId };
                var result = db.Query<LineItems>(sql, parameters);
                return result;
            }
        }

        // WIP
        public LineItems DeleteLineItem(int lineItemId)
        {
            var sql = @"DELETE FROM LineItems
                        WHERE LineItems.LineItemId = @lineItemId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { LineItemId = lineItemId };
                var result = db.QueryFirstOrDefault<LineItems>(sql, parameters);
                return result;
            }
        }

        public List<Invoices> CompleteOrder(Invoices invoiceToComplete)
        {
            var sql = @"UPDATE Invoice
                         Set PaymentId = @PaymentId
                            ,InvoiceDate = @InvoiceDate
	                        ,BillingAddress = @BillingAddress
	                        ,BillingCity = @BillingCity
	                        ,BillingZip = @BillingZip
	                        ,BillingState = @BillingState
	                        ,SalesRepId = @SalesRepId
	                        ,StatusId = @StatusId
                                output inserted.*	
                                    WHERE Invoice.InvoiceId = @InvoiceId
                                    AND Invoice.StatusId = 1";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.Query<Invoices>(sql, invoiceToComplete).ToList();
                return result;
            }
        }

        public List<ProductQuantityUpdate> GetQuantityToDelete(int InvoiceId)
        {
            var sql = @"select LineItems.quantity, LineItems.ProductId
                        from LineItems	
	                        join Invoice	
		                        on LineItems.InvoiceId = Invoice.InvoiceId
			                        where Invoice.InvoiceId = @InvoiceId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new
                {
                    InvoiceId = InvoiceId,
                };

                var result = db.Query<ProductQuantityUpdate>(sql, parameters).ToList();

                return result;
            }
        }
    }
}
