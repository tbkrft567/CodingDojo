using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DojoSurveyModel.Models;

namespace DojoSurveyModel.Controllers
{
    public class IndexController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("create")]
        public IActionResult Create(Response data)
        {
            Response survey = new Response()
            {
                name = data.name,
                location = data.location,
                language = data.language,
                comment = data.comment
            };
            return RedirectToAction("show", "show", survey);
        }


    }
}
