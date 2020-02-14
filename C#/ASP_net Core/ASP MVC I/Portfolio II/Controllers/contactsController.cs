using Microsoft.AspNetCore.Mvc;

namespace Portfolio
{
   public class ContactsController : Controller
   {
      [HttpGet("/contact")]
      public IActionResult Contacts()
      {
         return View();
      }
   }
}