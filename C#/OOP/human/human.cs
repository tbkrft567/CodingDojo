using System;

namespace human
{
   class Human
   {
      // Fields for Human
      public string Name;
      public int Strength;
      public int Intelligence;
      public int Dexterity;
      public int health;

      // add a public "getter" property to access health
      public int HealthProp
      {
         get { return health; }
      }
      // Add a constructor that takes a value to set Name, and set the remaining fields to default values
      public Human(string nameParam)
      {
         Name = nameParam;
         Strength = 3;
         Intelligence = 3;
         Dexterity = 3;
         health = 100;
      }

      // Add a constructor to assign custom values to all fields
      public Human(string nameParam, int strengthParam, int intelligenceParam, int dexterityParam, int healthParam)
      {
         Name = nameParam;
         Strength = strengthParam;
         Intelligence = intelligenceParam;
         Dexterity = dexterityParam;
         health = healthParam;
      }
      // Build Attack method
      public virtual int Attack(Human target)
      {
         return target.health -= (5 * this.Strength);
      }

      public virtual void getInfo()
      {
         Console.WriteLine("***************");
         Console.WriteLine("Name: "+this.Name);
         Console.WriteLine("Strength: "+this.Strength);
         Console.WriteLine("Intelligence: "+this.Intelligence);
         Console.WriteLine("Dexterity: "+this.Dexterity);
         Console.WriteLine("Health: "+this.health);
      }
   }
}
