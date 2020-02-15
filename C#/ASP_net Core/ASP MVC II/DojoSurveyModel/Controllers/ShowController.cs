using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DojoSurveyModel.Models;

namespace DojoSurveyModel.Controllers
{
   public class ShowController : Controller
   {
      [HttpGet("show")]
      public IActionResult Show(Response survey)
      {
         return View(survey);
      }
   }
}
