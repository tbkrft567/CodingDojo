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

      // [HttpPost("create")]
      // public IActionResult Create(string name, string location, string language, string comment)
      // {
         
      //    return View("Show", "ShowController", new { name = name, location = location, language = language, comment = comment } );
      // }
   }
}