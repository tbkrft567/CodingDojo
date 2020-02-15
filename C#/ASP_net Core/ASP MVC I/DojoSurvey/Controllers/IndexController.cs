using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey
{
   public class IndexController : Controller
   {
      [HttpGet("")]
      public IActionResult Index()
      {
         return View("Index");
      }

      [HttpPost("create")]
      public IActionResult Create(string name, string location, string language, string comment)
      {
         System.Diagnostics.Debug.WriteLine("here");
         return RedirectToAction("Show", "Show", new {name = "zzz", location = "xxx"});
         //, "ShowController", new { @name = "Zach", @location = "Dallas" }
      }


   }
}