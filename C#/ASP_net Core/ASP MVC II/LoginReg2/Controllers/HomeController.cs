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
                    User newUser = new User()
                    {
                        FirstName = userData.FirstName,
                        LastName = userData.LastName,
                        Email = userData.Email,
                        Password = userData.Password,
                        PasswordConfirmation = userData.PasswordConfirmation,
                    };
                    return View("success", newUser);
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
                    Login newLogin = new Login()
                    {
                        Email = userData.Email,
                        Password = userData.Password,
                    };
                    return View("success", newLogin);
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("success")]
        public IActionResult Success(User userData)
        {
            return View("Success", userData);
        }

    }
}
