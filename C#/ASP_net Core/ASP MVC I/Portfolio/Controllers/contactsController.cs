using Microsoft.AspNetCore.Mvc;

namespace Portfolio
{
   public class ContactsController : Controller
   {
      [HttpGet("/contact")]
      public string Contacts()
      {
         return $"This is my Contract!";
      }
   }
}