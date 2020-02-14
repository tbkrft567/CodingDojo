using Microsoft.AspNetCore.Mvc;

namespace RazorFun
{
   public class IndexController : Controller
   {
      [HttpGet("")]
      public ViewResult Index()
      {
         return View();
      }
   }
}