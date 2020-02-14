    using System;
    using System.Collections.Generic;
    using HungryNinja;

    namespace HungryNinja
    {
    class Program
    {
        static void Main(string[] args)
        {
            Buffet buffet1 = new Buffet();
            Ninja ninja1 = new Ninja();

            while (ninja1.IsFull == false)
            {
                Food food1 = buffet1.Server();
                ninja1.Eat(food1);
                ninja1.IsFull = ninja1.CaloriesProp > 1200 ? true : false;
            }
        }


        class Buffet
        {
            public List<Food> Menu;
            public Buffet()
            {
                Menu = new List<Food>()
                    {
                        new Food("Chicken", 475, true, false),
                        new Food("Beef", 500, true, false),
                        new Food("Broccoli", 0, true, false),
                        new Food("Mushrooms", 10, true, false),
                        new Food("Ice Cream", 1200, false, true),
                        new Food("Tacos", 825, true, false),
                        new Food("Burritos", 850, true, false),
                        new Food("Pizza", 1000, true, false)
                    };
            }
            public Food Server()
            {
                Random rand = new Random();
                Food selectedFood = this.Menu[rand.Next(0, this.Menu.Count)];
                return selectedFood;
            }
        }

            }
    }
