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
            if(ModelState.IsValid){
                if(userData.Password == userData.PasswordConfirmation)
                {
                        ViewBag.FirstName = userData.FirstName;
                        ViewBag.LastName = userData.LastName;
                        ViewBag.Email = userData.Email;
                        ViewBag.Password = userData.Password;
                        ViewBag.PasswordConfirmation = userData.PasswordConfirmation;
                    
                    return View("success");
                }
                return View("Index");
            }
            else
            {
                return View("Index");
            }
        }
        [HttpPost("create/login")]
        public IActionResult CreateLogin(Login userData)
        {
            if(ModelState.IsValid){
                        ViewBag.Email = userData.Email;
                        ViewBag.Password = userData.Password;
                    return View("success");
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("success")]
        public IActionResult Success()
        {
            return View("Success");
        }

    }
}
