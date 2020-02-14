using System;
namespace human
{
   class Samurai : Human
   {
      public Samurai(string name) : base(name)
      {
         Name = name;
         health = 175;
      }
      public override int Attack(Human target)
      {
         if (target.health < 50)
         {
            target.health = 0;
            Console.WriteLine("Fatal Hit!");
            return target.health;
         }
         else
         {
            Console.WriteLine("Miss Hit!");
            return target.health;
         }
      }
   }
}