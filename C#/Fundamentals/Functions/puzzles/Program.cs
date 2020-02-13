    using System;
    using System.Collections.Generic;

    namespace puzzles
    {
    class Program
    {
        static void Main(string[] args)
        {
            // int[] arr = 
            // RandomArray();
            // foreach (var item in arr)
            // {
            //     Console.WriteLine(item);
            // }

            // TossCoin();
            // double results = TossMultipleCoins(1000);
            // Console.WriteLine(results+" chance of receiving heads");
            List<string> names =  Names();
            foreach (var item in names)
            {
                Console.WriteLine(item);
            }
        }

        public static int[] RandomArray()
        {
            Random rand = new Random();

            int[] randInt = new int[10];
            for (int i = 0; i < randInt.Length; i++)
            {
                randInt[i] = rand.Next(5, 25);
            }

            int sum = 0;
            int max = randInt[0];
            int min = randInt[0];
            for (int i = 0; i < randInt.Length; i++)
            {
                if (max < randInt[i])
                {
                max = randInt[i];
                }
                else if (min > randInt[i])
                {
                min = randInt[i];
                }
                sum += randInt[i];
            }
            Console.WriteLine($"Sum {sum}; Min:{min}; Max:{max}");
            return randInt;
        }
        public static string TossCoin()
        {
            Random rand = new Random();
            Console.WriteLine("Tossing a Coin!");
            int result = rand.Next(0, 2);
            string resultStr = "";
            if (result == 0)
            {
                resultStr = "Heads";
            }
            else
            {
                resultStr = "Tails";
            }
            Console.WriteLine(resultStr);
            return resultStr;
        }
        public static double TossMultipleCoins(int num)
        {
            Random rand = new Random();
            List<int> flips = new List<int>();
                Console.WriteLine("Tossing a Coin!");
            for (int i = 0; i < num; i++)
            {
                int result = rand.Next(0, 2);
                // Console.WriteLine(result);
                flips.Add(result);
            }

            int sum = 0;
            for (int i = 0; i < flips.Count; i++)
            {
                sum += flips[i];
            }
            double average = (double) sum / (double) flips.Count;
            return average;
        }

        public static List<string> Names()
        {
            List<string> names = new List<string>();
            names.Add("Todd");
            names.Add("Tiffany");
            names.Add("Charlie");
            names.Add("Geneva");
            names.Add("Sydney");

            //Shuffle The List ****

            for (int i = 0; i < names.Count; i++)
            {
                if (names[i].Length <= 5)
                {
                    names.RemoveAt(i);
                    i--;
                } 
            }
            return names;
        }

    }
}
