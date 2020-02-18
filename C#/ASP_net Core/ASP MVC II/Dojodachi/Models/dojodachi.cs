namespace Dojodachi.Models
{
   public class Dojo
   {
      public int fullness { get; set; }
      public int happiness { get; set; }
      public int meals { get; set; }
      public int energy { get; set; }
      public string reaction { get; set; }

      public Dojo()
      {
         this.fullness = 20;
         this.happiness = 20;
         this.meals = 3;
         this.energy = 50;
         this.reaction = "";

      }
   }
}