using System.Collections.Generic;
using Capstone.Exceptions;
using System.Data.SqlClient;
using Capstone.Models;
using System;

namespace Capstone.DAO
{
    public class ItemsDao : IItemsDao
    {
        private readonly string connectionString;

        public ItemsDao(string dbConnectionString)
        {
            connectionString = dbConnectionString;
        }

        public List<Item> GetListOfItems()
        {
            List<Item> Items = new List<Item>();

            string sql = "  Select ItemName from Items";

            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();

                    SqlCommand cmd = new SqlCommand(sql, conn);
                    SqlDataReader reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        Item item = new Item();
                        item.ItemName = Convert.ToString(cmd.ExecuteScalar());
                        Items.Add(item);

                    }

                }
            }
            catch (SqlException ex)
            {
                throw new DaoException("SQL exception occurred", ex);
            }

            return Items;
         
        }
    }
    }
