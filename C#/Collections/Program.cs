    using System;
    using System.Collections.Generic; //this is to include Lists or Dictionaries

    namespace Collections
    {
    class Program
    {
        static void Main(string[] args)
        {
            // ! Array -- fixed in size not internal values
            // //defaulted to all 0s
            // int[] numArray = new int[5];

            // //size determined by the given data
            // int[] newArray2 = {1,2,3,4,5};

            // int[] array3; //Declare
            // array3 = new int[] {1,3,5,7,9}; //Initialize

            // //Array size cannot change, but values inside can change
            // newArray2[0] = 9;
            // Console.WriteLine(newArray2[0]);
            // foreach (var value in newArray2)
            // {
            //     Console.WriteLine(value);
            // }

            // ! Lists -- similiar to JS array
            //     List<string> bikes = new List<string>();
            //     bikes.Add("Kawaski");
            //     bikes.Add("Triumph");
            //     Console.WriteLine(bikes[1]);
            //     Console.WriteLine($"We currently know of {bikes.Count} motorcycle manfacturers");

            //     System.Console.WriteLine("The current manufacturers we have seen are:");
            //     for (int indx = 0; indx < bikes.Count; indx++)
            //     {   
            //         System.Console.WriteLine("-" + bikes[indx]);
            //     }
            //     bikes.Insert(2, "Yamaha");

            //     bikes.Remove("Kawaski");
            //     bikes.RemoveAt(0);
            //     System.Console.WriteLine("List of Non-Japanese Manufacturers:");
            //     foreach (var manu in bikes)
            //     {
            //         System.Console.WriteLine("-" + manu);
            //     }

            // ! Dictionary
            Dictionary<string, string> profile = new Dictionary<string, string>();

            profile.Add("Name", "Speros");
            profile.Add("Language", "PHP");
            profile.Add("Location", "Greece");
            System.Console.WriteLine("Instructor Profile:");
            System.Console.WriteLine("Name - " + profile["Name"]);
            System.Console.WriteLine("From - " + profile["Location"]);
            System.Console.WriteLine("Favorite Language - " + profile["Language"]);
            // foreach (var item in profile)
            // {
            //     System.Console.WriteLine(item.Key + "-" + item.Value);
            // }
            foreach (KeyValuePair<string, string> item in profile)
            {
                System.Console.WriteLine(item.Key + "-" + item.Value);
            }
        }
    }
}
