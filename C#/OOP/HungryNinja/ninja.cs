using System;
using HungryNinja;

namespace HungryNinja
{
   abstract class Ninja
   {
      protected int calorieIntake;
      public List<IConsumable> ConsumptionHistory;

      public Ninja()
      {
         calorieIntake = 0;
         foodHistory = new List<IConsumable>();
      }
      public abstract bool IsFull {get;}
      public abstract void Consume(IConsumable item);
   }
}