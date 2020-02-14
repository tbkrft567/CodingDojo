using Microsoft.AspNetCore.Mvc;

namespace HelloASP
{
   public class HomeController : Controller
   {
      //Requests
      //localhost:5000
      [RouteAttribute("")] //the word ATTRIBUTE can be omitted
      [HttpGetAttribute]
      public string x()
      {
         return "Hello From Controller zzzzz";
      }

      //localhost:5000/hello
      [HttpGet("hello")]
      public string Index()
      {
         return "Hello World from HelloController!";
      }

      [HttpGet("{name}")]
      public string Hello(string name)
      {
         return $"Hello, {name}!";
      }

      [HttpGet("user/{name}/{location}/{age}")]
      public string UserInfo(string name, string location, int age)
      {
         return $"{name}, aged {age}, is from {location}";
      }
   }
}