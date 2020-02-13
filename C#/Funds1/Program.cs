    using System;

    namespace Funds1
    {
    class Program
    {
        static void Main(string[] args)
        {
            //1-255
            // for (int i = 1; i < 256; i++)
            // {
            //     Console.WriteLine(i);
            // }
            
            int ii = 1;
            while (ii < 256)
            {
                System.Console.WriteLine(ii);
                ii++;
            }

            //1-100
            // for (int g = 1; g < 101; g++)
            // {
            //     if ((g % 3 == 0 || g % 5 == 0) && (g % 3 != 0 || g % 5 != 0))
            //     {
            //     Console.WriteLine(g);
            //     }
            // }

            int gg = 1;
            while (gg < 101)
            {
                if ((gg % 3 == 0 || gg % 5 == 0) && (gg % 3 != 0 || gg % 5 != 0))
                {
                Console.WriteLine(gg);
                }
                gg++;
            }

            //Fizz -- Buzz
            // for (int z = 1; z < 101; z++)
            // {
            //     if ((z % 3 == 0 || z % 5 == 0) && (z % 3 != 0 || z % 5 != 0))
            //     {
            //     if (z % 3 == 0)
            //     {
            //         Console.WriteLine("Fizz");
            //     }
            //     else
            //     {
            //         Console.WriteLine("Buzz");
            //     }
            //     }
            // }

            int zz = 1;
            while(zz < 101)
            {
                if ((zz % 3 == 0 || zz % 5 == 0) && (zz % 3 != 0 || zz % 5 != 0))
                {
                    if (zz % 3 == 0)
                    {
                        Console.WriteLine("Fizz");
                    }
                    else
                    {
                        Console.WriteLine("Buzz");
                    }
                }
                zz++;
            } 
        }
    }
    }
