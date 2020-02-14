using Microsoft.AspNetCore.Mvc;

namespace Portfolio
{
   public class ProjectsController : Controller
   {
      [HttpGet("/projects")]
      public string Projects()
      {
         return $"These are my projects";
      }
   }
}