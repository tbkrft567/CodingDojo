using System;
using human;

namespace human
{
   class Wizard : Human
   {
      public Wizard(string name) : base(name)  
      {
         Name = name;
         health = 50;
         Intelligence = 25;
      }

      public override int Attack(Human target)
      {
         target.health -= (5*this.Intelligence);
         this.health += (5*this.Intelligence);
         Console.WriteLine($"target's health {target.health}; my health {this.health}");
         return target.health;
      }
      public void Heal(Human target)
      {
         target.health += (10*this.Intelligence);
         Console.WriteLine($"new health: {target.health}");
      }
   }
}