using Microsoft.AspNetCore.Mvc;
using System;

namespace TimeDisplay
{
   public class TimesController : Controller
   {
      [HttpGet("")]
      public IActionResult funtion_name()
      {
         string today = DateTime.Now.ToString("dddd, dd MMMM yyyy HH:mm tt"); //https://www.c-sharpcorner.com/blogs/date-and-time-format-in-c-sharp-programming1
         ViewBag.today = today;
         ViewBag.test = "test";
         return View("Times");
      }
   }
}