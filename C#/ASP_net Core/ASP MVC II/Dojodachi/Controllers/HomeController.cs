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

        [HttpGet("/Dojodachi")]
        public IActionResult Index(Dojo myDojo)
        {
            myDojo = forwardDojo(myDojo, 10, 0, -1, -5);
            return View(myDojo);
        }
        [HttpPost("/Feed")]
        public IActionResult Feed(Dojo myDojo)
        {
            return RedirectToAction("Index", myDojo);
        }
        [HttpPost("/Play")]
        public IActionResult Play()
        {
            return RedirectToAction("Index");
        }
        [HttpPost("/Work")]
        public IActionResult Work()
        {
            return RedirectToAction("Index");
        }
        [HttpPost("/Sleep")]
        public IActionResult Sleep()
        {
            return RedirectToAction("Index");
        }

        public Dojo forwardDojo(Dojo incomingDojo, int chgFullness = 0, int chgHappiness = 0, int chgMeals = 0, int chgEnergy = 0)
        {
            Dojo myDojo = new Dojo()
            {
                fullness = incomingDojo.fullness+chgFullness,
                happiness = incomingDojo.happiness+chgHappiness,
                meals = incomingDojo.meals+chgMeals,
                energy = incomingDojo.energy+chgEnergy,
                reaction = incomingDojo.reaction,
            };
            return myDojo;
        }

    }
}
