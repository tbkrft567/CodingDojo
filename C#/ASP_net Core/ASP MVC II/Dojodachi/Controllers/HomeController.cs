    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Dojodachi.Models;

    namespace Dojodachi.Controllers
    {
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Base()
        {
            Dojo myDojo = new Dojo();
            return RedirectToAction("Index", myDojo);
        }

        [HttpGet("/Dojodachi/")]
        public IActionResult Index(Dojo myDojo)
        {
            return View(myDojo);
        }
        [HttpPost("Feed")]
        public IActionResult Feed(Dojo myDojo)
        {
            myDojo = forwardDojo(myDojo, 10, 0, -1, -5);
            return RedirectToAction("Index", myDojo);
        }
        [HttpPost("/Play")]
        public IActionResult Play(Dojo myDojo)
        {
            myDojo = forwardDojo(myDojo, 10, 0, -1, -5);
            return RedirectToAction("Index", myDojo);
        }
        [HttpPost("/Work")]
        public IActionResult Work(Dojo myDojo)
        {
            myDojo = forwardDojo(myDojo, 10, 0, -1, -5);
            return RedirectToAction("Index", myDojo);
        }
        [HttpPost("/Sleep")]
        public IActionResult Sleep(Dojo myDojo)
        {
            myDojo = forwardDojo(myDojo, 10, 0, -1, -5);
            return RedirectToAction("Index", myDojo);
        }

        public Dojo forwardDojo(Dojo incomingDojo, int chgFullness = 0, int chgHappiness = 0, int chgMeals = 0, int chgEnergy = 0)
        {
                incomingDojo.fullness+=chgFullness;
                incomingDojo.happiness+=chgHappiness;
                incomingDojo.meals+=chgMeals;
                incomingDojo.energy+=chgEnergy;
            
            return incomingDojo;
        }

    }
}
