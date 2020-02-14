using Microsoft.AspNetCore.Mvc;

namespace Portfolio
{
   public class IndexController : Controller
   {
      [HttpGet("")]
      public string Index()
      {
         return $"This is my index";
      }
   }
}
