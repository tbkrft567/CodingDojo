    using System;
    using System.Collections.Generic;

    namespace CollectionsPractice
    {
    class Program
    {
        static void Main(string[] args)
        {
            // ! Arrays
            // int[] numArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            // int[] numArray2 = new int[10];

            string[] strArray = { "Tim", "Martin", "Nikki", "Sara" };
            // string[] strArray2 = new string[4];

            // bool[] boolArray = { true, false, true, false, true, false, true, false, true, false };
            // bool[] boolArray2 = new bool[10];

            // ! List
            List<string> iceCream = new List<string>();
            iceCream.Add("type1");
            iceCream.Add("type2");
            iceCream.Add("type3");
            iceCream.Add("type4");
            iceCream.Add("type5");
            // Console.WriteLine("Ice Creams Available: " + iceCream.Count);
            // Console.WriteLine("Ice Creams number 3: " + iceCream[2]);
            iceCream.RemoveAt(2);
            // Console.WriteLine("Ice Creams Available: " + iceCream.Count);

            // ! Dictionary
            Random rand = new Random();
            Dictionary<string, string> stringerDict = new Dictionary<string, string>();
            for (int index = 0; index < strArray.Length; index++)
            {
                stringerDict.Add(strArray[index], iceCream[rand.Next(0, 4)]);
            }
            Console.WriteLine($"Peoples Favorite Ice Cream");

            foreach (KeyValuePair<string, string> element in stringerDict)
            {
                Console.WriteLine($"{element.Key}-{element.Value}");
            }
            //MultiDimiensional Arrays
            //Jagged Arrays
        }
    }
}
