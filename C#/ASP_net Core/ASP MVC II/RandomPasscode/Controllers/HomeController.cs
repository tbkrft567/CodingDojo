using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using RandomPasscode.Models;

namespace RandomPasscode.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("/clear")]
        public IActionResult Destroy()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("index");
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            int? num;
            int newNum;
            if(string.IsNullOrEmpty(HttpContext.Session.GetString("counter")))
            {
                HttpContext.Session.SetInt32("counter", 1);
            }
            else
            {
                num = HttpContext.Session.GetInt32("counter");
                if(num.HasValue)
                {
                    num = new int?(num.GetValueOrDefault() + 1);
                    newNum = num ?? default(int);
                    HttpContext.Session.SetInt32("counter", newNum);
                }

            }
            int? countValue =  HttpContext.Session.GetInt32("counter");
            IEnumerable<string> keys = HttpContext.Session.Keys; //! Get the Keys in Session
            Random rand = new Random();

            int intValue;
            char charValue;
            string passCode = "";
            for (int i = 0; i < 14; i++)
            {
                intValue = Convert.ToInt32(Math.Floor(26 * rand.NextDouble() + 65));
                charValue = Convert.ToChar(intValue);
                passCode += charValue.ToString();
            }
            ViewBag.passCode = passCode;
            ViewBag.countValue = countValue;
            ViewBag.keys = keys;

            return View();
        }
    }
}
