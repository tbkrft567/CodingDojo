using System;

namespace human
{
class Program
{
    static void Main(string[] args)
    {
        Human zach = new Human("Zach");
        Human shelby = new Human("Shelby");
        Console.WriteLine(zach.Name);
        Console.WriteLine(shelby.Name);
        shelby.Attack(zach);
        Console.WriteLine(zach.HealthProp);
    }

    class Human
    {
        // Fields for Human
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health;

        // add a public "getter" property to access health
        public int HealthProp
        {
            get{
                return health;
            }
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
        public Human(string nameParam, int strengthParam, int intelligenceParam, int dexterityParam, int healthParam){
            Name= nameParam;
            Strength = strengthParam; 
            Intelligence = intelligenceParam; 
            Dexterity = dexterityParam; 
            health = healthParam;
        }
        // Build Attack method
        public int Attack(Human target)
        {
            return  target.health -= (5*this.Strength);
        }
    }


}
}
