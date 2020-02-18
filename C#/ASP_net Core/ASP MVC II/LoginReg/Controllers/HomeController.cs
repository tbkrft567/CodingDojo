using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoginReg.Models;

namespace LoginReg.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("create/user")]
        public IActionResult CreateUser(IndexViewModel modelData)
        {
            User submittedUser = modelData.NewUser;
            if(ModelState.IsValid)
            {
                return RedirectToAction("Success", submittedUser);
            }
            return View("Index");
        }

        [HttpPost("create/login")]
        public IActionResult CreateLogin(IndexViewModel modelData)
        {
            Login submittedLogin = modelData.NewLogin;
            if(ModelState.IsValid)
            {
                return RedirectToAction("Success", submittedLogin);
            }
            return View("Index");
        }

        [HttpGet("success")]
        public IActionResult Success(IndexViewModel data)
        {
            return View("Show");
        }

    }
}
