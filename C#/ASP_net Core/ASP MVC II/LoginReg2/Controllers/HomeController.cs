using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoginReg2.Models;

namespace LoginReg2.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("create/user")]
        public IActionResult CreateUser(User userData)
        {
            return ViewModelFun()
        }

        [HttpGet("success")]
        public IActionResult Index()
        {
            return View("Success");
        }
    }
}
