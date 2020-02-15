using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey
{
   public class ShowController : Controller
   {
      [HttpGet("show/{name}/{location}")]
      public IActionResult Show(string name, string location)
      {
         ViewBag.name = name;
         ViewBag.location = location;
         return View();
      }
   }
}