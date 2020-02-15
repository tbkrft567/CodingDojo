using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DojoSurveyValidations.Models;

namespace DojoSurveyValidations.Controllers
{
    public class IndexController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("create")]
        public IActionResult Create(Survey survey)
        {
            if (ModelState.IsValid)
            {
                Survey newSurvey = new Survey()
                {
                    name = survey.name,
                    location = survey.location,
                    language = survey.language,
                    comment = survey.comment
                }; 
                return RedirectToAction("show", newSurvey);
            }
            else
            {
                return View("Index");
            }
        }
        [HttpGet("show")]
        public IActionResult Show(Survey newSurvey)
        {
            return View(newSurvey);
        }
    }
}
