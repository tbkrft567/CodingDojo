using Microsoft.AspNetCore.Mvc;

namespace FormSubmission
{
      public class ShowController : Controller
      {
         [HttpGet("show")]
         public string Show()
         {
            return "Successful Submission!!";
         }
      }
}