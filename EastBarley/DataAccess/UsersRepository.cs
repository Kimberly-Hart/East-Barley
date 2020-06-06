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
    public class UsersRepository
    {
        string ConnectionString;
        public UsersRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("East&Barley");
        }
            //GET ALL USERS

            public IEnumerable<Users> GetAllUsers()
            {
                using (var db = new SqlConnection(ConnectionString))

                    return db.Query<Users>("select * from Users");
            }
        
        
        
        }
    }

