using HungryNinja;

namespace HungryNinja
{
   class Food : IConsumable
   {
      public string Name {get;set;}
      public int Calories {get;set;}
      public bool IsSpicy {get;set;}
      public bool IsSweet {get;set;}
      public string GetInfo()
      {
         return $"{Name} (Food).  Calories: {Calories}.  Spicy?: {IsSpicy}, Sweet?: {IsSweet}";
      }
      public Food(string nameParam, int caloriesParam, bool isSpicyParam, bool isSweetParam)
      {
         Name = nameParam;
         Calories = caloriesParam;
         IsSpicy = isSpicyParam;
         IsSweet = isSweetParam;
      }
   }

}
