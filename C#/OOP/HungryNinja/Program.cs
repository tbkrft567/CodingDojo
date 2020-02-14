    using System;
    using System.Collections.Generic;

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
        class Food
        {
            public string Name;
            public int Calories;
            public bool IsSpicy;
            public bool IsSweet;

            public Food(string nameParam, int caloriesParam, bool isSpicyParam, bool isSweetParam)
            {
                Name = nameParam;
                Calories = caloriesParam;
                IsSpicy = isSpicyParam;
                IsSweet = isSweetParam;
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

        class Ninja
        {
            private int calorieIntake;
            private List<Food> foodHistory;
            private bool isFull;

            public Ninja()
            {
                calorieIntake = 0;
                foodHistory = new List<Food>();
            }
            public void Eat(Food food)
            {
                if (this.IsFull == false)
                {
                this.calorieIntake += food.Calories;
                this.foodHistory.Add(food);
                Console.WriteLine($"Is food Spicy: {food.IsSpicy}; Is food Sweet: {food.IsSweet}\n*** {this.calorieIntake} {this.IsFull}");
                }
                else
                {
                Console.WriteLine("Ninja cannot eat anymore!");
                }

            }
            public bool IsFull
            {
                get
                {
                    return this.isFull;
                }
                set
                {
                    isFull = value;
                }
            }
            public int CaloriesProp
            {
                get
                {
                    return this.calorieIntake;
                }
            }
        }
    }
    }
