    using System;

    namespace ASCIIPractice
    {
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();

            int intValue;
            char charValue;
            string passCode = "";
            for (int i = 0; i < 14; i++)
            {
                intValue = Convert.ToInt32(Math.Floor(26 * rand.NextDouble() + 65));
                charValue = Convert.ToChar(intValue);
                passCode += charValue.ToString();
            }
            Console.WriteLine(passCode);
            // Console.WriteLine(text);

        }
    }
}

    // Complete 14 times && Concatenate --- 
    // return 4 - 7
    // if 4 || 6 -- return 1 - 9 or A - F () abcdef (6) + 123456789 (9) == 15 primaryArray[] 
    // if 5 || 7 -- return 0 - 9 or A 11 primaryArray[]



    // 41 - 49 
    // 4A - 4F
    // 50 - 59
    // 5A
    // 61 - 69
    // 6A - 6F
    // 70 - 79
    // 7A

    // A - F == 41 - 46



    // 65 A 41
    // 66 B 42
    // 67 C 43
    // 68 D 44
    // 69 E 45
    // 70 F 46
    // 71 G 47
    // 72 H 48
    // 73 I 49
    // 74 J 4A
    // 75 K 4B
    // 76 L 4C
    // 77 M 4D
    // 78 N 4E
    // 79 O 4F
    // 80 P 50
    // 81 Q 51
    // 82 R 52
    // 83 S 53
    // 84 T 54
    // 85 U 55
    // 86 V 56
    // 87 W 57
    // 88 X 58
    // 89 Y 59
    // 90 Z 5A
    // 96 ` 60
    // 97 a 61
    // 98 b 62
    // 99 c 63
    // 100 d 64
    // 101 e 65
    // 102 f 66
    // 103 g 67
    // 104 h 68
    // 105 i 69
    // 106 j 6A
    // 107 k 6B
    // 108 l 6C
    // 109 m 6D
    // 110 n 6E
    // 111 o 6F
    // 112 p 70
    // 113 q 71
    // 114 r 72
    // 115 s 73
    // 116 t 74
    // 117 u 75
    // 118 v 76
    // 119 w 77
    // 120 x 78
    // 121 y 79
    // 122 z 7A