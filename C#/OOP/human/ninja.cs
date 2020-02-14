using System;
namespace human
{
   class Ninja : Human
   {
      public Ninja(string name) : base(name)
      {
         Name = name;
         Dexterity = 175;
      }

      public override int Attack(Human target)
      {
         target.health -= (5 * Dexterity);
         float chance = .2f;
         Random rand = new Random();
         float value = rand.Next();
         Console.WriteLine(value);
         if (value > chance)
         {
            target.health -= 10;
         }
         return target.health;
      }
      public void Meditate()
      {
         if (this.health < 100)
         {
            this.health = 100;
         }
         else
         {
            Console.WriteLine("health already >= 100");
         }
      }
      public void Steal(Human target)
      {
         target.health -= 5;
         this.health += 5;
         Console.WriteLine($"old health: {target.health} and new health: {this.health}");
      }
   }
}