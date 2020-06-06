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

        }
    }

