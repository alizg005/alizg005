using Capstone.DAO;
using Capstone.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Capstone.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IItemsDao itemsDao;

        public ItemsController(IItemsDao itemsDao)
        {
            this.itemsDao = itemsDao;
        }
    [HttpGet]

    public ActionResult<List<Item>> GetListOfItems()
    {
            List<Item> Items = itemsDao.GetListOfItems();

            return Items;
    }

    }

}
