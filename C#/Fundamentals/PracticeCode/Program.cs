using System;

namespace PracticeCode
{
    class Program
    {
        static void Main(string[] args)
        {   
            string place = "Coding Dojo";
            string message = $"Hello {place}";
            Console.WriteLine(message);

            Console.WriteLine("the" + 3.14);
            Console.WriteLine("My name is {0}, I am " + 28 + " years old ", "tim");

            // A==B vs. A.Equal(B)
            //A.Equals(B) checks spot in memory?

            for(int x = 0; x < 5; x++)
            {
                Console.WriteLine("X1: "+x);
            }
            int y = 0;
            while(y < 5)
            {
                Console.WriteLine("Y2: "+y);
                y++;
            }

            //overloading (Polymorphism): 
            // .Next() :: 0 < X < MaxValue 
            // .Next(Int32), para1 < X < MaxValue
            // .Next(Int32, Int32) , para1 < X < para2

            //.NextDouble() Returns a random floating-point number that is greater than or equal to 0.0 and less than 1.0
            Random rand =  new Random();
            for (int G = 0; G < 10; G++)
            {
                System.Console.WriteLine(rand.Next(2,8));    
            }

        }
    }
}
