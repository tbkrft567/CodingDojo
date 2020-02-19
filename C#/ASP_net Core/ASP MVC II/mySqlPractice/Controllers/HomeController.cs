using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mySqlPractice.Models;
using DbConnection;

namespace mySqlPractice.Controllers
{
    public class HomeController : Controller
    {   
        [HttpGet("")]
        public IActionResult Index()
        {
            List<Dictionary<string, object>> AllRentals = DbConnector.Query("select * from rental limit 250");
            ViewBag.Rentals = AllRentals;
            return View();
        }

    }
}
