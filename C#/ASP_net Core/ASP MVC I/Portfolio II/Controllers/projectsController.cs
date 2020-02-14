using Microsoft.AspNetCore.Mvc;

namespace Portfolio
{
   public class ProjectsController : Controller
   {
      [HttpGet("/project")]
      public IActionResult Projects()
      {
         return View();
      }
   }
}