using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
    public class HomeController : Controller
    {
        // public IActionResult Index()
        // {
        //     return View();
        // }
        //**************************************************
        [HttpGet("")]
        public IActionResult Person()
        {
            User person = new User("Zach", "Kraft");

            return View(person);
        }
        
        //**************************************************
        [HttpGet("message")]
        public IActionResult Message()
        {
            string message = "This is my message";
            return View("Message", message);
        }
        //**************************************************
        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            int[] numbers = new int[]
            {
                1,2,3,4,5,6,7,8,9
            };
            return View(numbers);
        }
        //**************************************************
        [HttpGet("names")]
        public IActionResult Names()
        {
            List<string> names = new List<string>()
            {
                "Sally", "Billy", "Joey", "Moose"
            };
            return View(names);
        }

        // public IActionResult Privacy()
        // {
        //     return View();
        // }

        // [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        // public IActionResult Error()
        // {
        //     return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        // }
    }
}
