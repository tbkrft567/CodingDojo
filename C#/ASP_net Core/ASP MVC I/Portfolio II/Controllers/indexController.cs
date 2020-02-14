using Microsoft.AspNetCore.Mvc;

namespace Portfolio
{
   public class IndexController : Controller
   {
      [HttpGet("")]
      public IActionResult Index()
      {
         ViewBag.myName = "Zach Kraft";
         return View();
      }
   }
}
