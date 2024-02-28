﻿using System.Collections.Generic;
using Capstone.Models;

namespace Capstone.DAO
{
    public interface IItemsDao
    {
        List<Item> GetListOfItems();
    }
}