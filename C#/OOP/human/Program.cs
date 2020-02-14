    using System;
    using human;

    namespace human
    {
    class Program
    {
        static void Main(string[] args)
        {
            // Human zach = new Human("Zach");
            // Human shelby = new Human("Shelby");
            // Console.WriteLine(zach.Name);
            // Console.WriteLine(shelby.Name);
            // shelby.Attack(zach);
            // Console.WriteLine(zach.HealthProp);

            Human human = new Human("Zach1");
            Wizard wizard = new Wizard("Zach2");
            Ninja ninja = new Ninja("Zach3");
            Samurai samurai = new Samurai("Zach4");
            Wizard wizard2 = new Wizard("Zach5");

            human.getInfo();
            wizard.getInfo();
            ninja.getInfo();
            samurai.getInfo();
            wizard2.getInfo();

            wizard.Attack(human);
            human.Attack(wizard);
            ninja.Attack(wizard);
            wizard2.Heal(wizard);
            wizard.Heal(human);
            ninja.Meditate();
            ninja.Steal(samurai);
            samurai.Attack(ninja);
               
            human.getInfo();
            wizard.getInfo();
            ninja.getInfo();
            samurai.getInfo();
            wizard2.getInfo();

        }
    }
}
