using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models
{
   public class User
   {
      [Required]
      [MinLength(4)]
      [Display(Name = "First Name - z")]
      public string FirstName { get; set; }
      [Required]
      [MinLength(4)]
      [Display(Name = "Last Name - z")]
      public string LastName { get; set; }
      [Required]
      [Range(1, 99 /*int.MaxValue*/, ErrorMessage = "Only positive numbers allowed")]
      public int Age { get; set; }
      [Required]
      [EmailAddress]
      [DataType (DataType.EmailAddress)]
      public string Email { get; set; }
      [Required]
      [MinLength(8)]
      [DataType (DataType.Password)]
      public string Password { get; set; }
   }
}