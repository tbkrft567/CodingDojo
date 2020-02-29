using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.ViewModels;
using WebApplication1.Services;
using WebApplication1.Data;

namespace WebApplication1.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailservice;
        private readonly DutchContext _context;

        public AppController(IMailService mailservice, DutchContext context) {
            _mailservice = mailservice;
            _context = context;

        }
        public IActionResult Index() 
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact() 
        {
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model) 
        {
            if (ModelState.IsValid)
            {
                // Send the Email
                _mailservice.SendMessage("KraftZachariah@yahoo.com", model.Subject, $"From {model.Name} - {model.Email}, Message {model.Message}");
                ViewBag.UserMessage = "Message Sent";
                ModelState.Clear();
            }
            else 
            {
                // Show the Error
            }
            return View();
        }

        [HttpGet("about")]
        public IActionResult About() 
        {
            ViewBag.Title = "About Us";
            return View();
        }

        public IActionResult Shop() 
        {
            var results = _context.Products
                .OrderBy(p => p.Category)
                .ToList();
            //var results = from p in _context.Products
            //              orderby p.Category
            //              select p;
            return View(results.ToList());
        }

    }
}
