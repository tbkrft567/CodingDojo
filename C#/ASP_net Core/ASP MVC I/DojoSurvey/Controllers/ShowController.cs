using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey
{
   public class ShowController : Controller
   {
      [HttpPost("show")]
      public IActionResult Show(string name, string location, string language, string comment)
      {
         ViewBag.name = name;
         ViewBag.location = location;
         ViewBag.language  = language;
         ViewBag.comment = comment;
         return View("show");
      }

   }
}