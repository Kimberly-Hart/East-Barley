using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using EastBarley.Models;
using Dapper;
using Microsoft.AspNetCore.Mvc;

namespace EastBarley.DataAccess
{
    public class UsersRepository
    {
        string ConnectionString;
        public UsersRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("EastBarley");
        }
        //GET ALL USERS

        public IEnumerable<Users> GetAllUsers()
        {
            using (var db = new SqlConnection(ConnectionString))

                return db.Query<Users>("select * from Users");
        }

        // GET USER BY ID
        public Users GetUserById(int userId)
        {
            var query = @"select *
                          from Users
                          where UserId = @userId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { UserId = userId };

                var user = db.QueryFirstOrDefault<Users>(query, parameters);

                return user;
            }
        }
        // create a new user
        public Users CreateNewUser(Users newUser)
        {
            var sql = @"insert into Users(LastName, FirstName, DateOfBirth, Email, DateAccountCreated, isOver21, isAcctActive)
                       output inserted.*
                       values(@LastName, @FirstName, @DateOfBirth, @Email, @DateAccountCreated, @isOver21, @isAcctActive)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<Users>(sql, newUser);
                return result;
            }
        }

        // get user by email
        public Users GetUserByEmail(string email)
        {
            var query = @"select *
                          from Users
                          where Email = @email";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Email = email };

                var user = db.QueryFirstOrDefault<Users>(query, parameters);

                return user;
            }
        }
    }
}

