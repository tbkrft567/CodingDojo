using System;

namespace Basic13
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] num = {-3,-2,-1,0,1,2,3,4,5,6,7,8,9};
            
            PrintNumbers();
            PrintOdds();
            PrintSum();
            LoopArray(num);
            int maxNum = FindMax(num);
                Console.WriteLine(maxNum);
            GetAverage(num);
            int[] newArr = OddArray();
                foreach (var i in newArr)
                {
                    Console.WriteLine(newArr[i]);
                }
            int count = GreaterThanY(num, 3);
                Console.WriteLine(count);
            SquareArrayValues(num);
            EliminateNegatives(num);
            MinMaxAverage(num);
            ShiftValues(num);
            Object[] str = NumToString(num);
            foreach (var s in str)
            {
                Console.WriteLine(s);
            }
        }

        public static void PrintNumbers()
        {
            for (int i = 1; i <= 255; i++)
            {
                Console.WriteLine(i);
            }
        }

        public static void PrintOdds()
        {
            for (int i = 1; i <= 255; i+=2)
            {
                Console.WriteLine(i);
            }
        }

        public static void PrintSum()
        {
            int sum = 0;
            for (int i = 0; i <= 255; i++)
            {
                sum += i;
                Console.WriteLine("New number: "+i+" Sum: "+sum);
            }
            Console.WriteLine(sum);
        }

        public static void LoopArray(int[] numbers){
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.WriteLine(numbers[i]);
            }
        }
        public static int FindMax(int[] numbers){
            int max = numbers[0];
            for (int i = 1; i < numbers.Length; i++)
            {
                if (max < numbers[i])
                {
                    max = numbers[i];
                }
            }
            return max;
        }
        public static void GetAverage(int[] numbers){
            int sum = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                sum += numbers[i];
            }
            Console.WriteLine($"average is {sum/numbers.Length}");
        }
        public static int[] OddArray(){
            int[] oddNum = new int[128];
            int counter = 0;
            for (int i = 1; i <= 255; i+=2)
            {
                oddNum[counter] = i;
                counter++;
            }
            return oddNum;
        }
        public static int GreaterThanY(int[] numbers, int y){
            int counter = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] > y)
                {
                    counter++;
                }
            }
            return counter;
        }
        public static void SquareArrayValues(int[] numbers){
            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i]*=numbers[i];
            }
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.WriteLine(numbers[i]);
            }
        }
        public static void EliminateNegatives(int[] numbers){
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < 0)
                {
                    numbers[i] = 0;
                }
            }
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.WriteLine(numbers[i]);
            }
        }
        public static void MinMaxAverage(int[] numbers){
            int sum = 0;
            int max = numbers[0];
            int min = numbers[0];
            for (int i = 0; i < numbers.Length; i++)
            {
                if (max < numbers[i])
                {
                    max = numbers[i];
                }
                else if (min > numbers[i])
                {
                    min = numbers[i];
                }
            }
            float average = sum/numbers.Length; 
            Console.WriteLine("Avg:" + average + "\nMax:" + max + "\nMin:" + min);
        }
        public static void ShiftValues(int[] numbers){
            int temp;
            for (int i = 0; i < numbers.Length-1; i++)
            {
                temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
            }
            numbers[numbers.Length-1] = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.WriteLine(numbers[i]);
            }
        }
        public static object[] NumToString(int[] numbers){
            Object[] strings = new Object[numbers.Length];
            
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < 0)
                {
                    strings[i] = "Dojo";
                }
                else
                {
                    strings[i] = numbers[i].ToString();
                }
            }
            return strings;
        }

    }
}
