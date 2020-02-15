using System.ComponentModel.DataAnnotations;

namespace DojoSurveyValidations.Models
{
   public class Survey
   {
      [Required]
      [MinLength(2)]
      [Display(Name = "Name")]
      public string name { get; set; }
      [Required]
      [Display(Name = "Location")]
      public string location { get; set; }
      [Required]
      [Display(Name = "Language")]
      public string language { get; set; }
      [MaxLength (20)]
      [Display(Name = "Comment")]
      [DataType (DataType.MultilineText)]
      public string comment { get; set; }
   }
}
