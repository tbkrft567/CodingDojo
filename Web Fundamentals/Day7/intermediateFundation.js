// 1. Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
    // var x = -9
    // function sigma(x){
    //     var sum = 0;  
    //     if(x>=0){
    //         for(var i=x;i>0;i--, x--){
    //             sum+=x
    //         }
    //     }
    //     else{
    //         for(var i=x;i<0;i++, x++){
    //             sum+=x
    //         }
    //     }
    //     return sum;
    // }
    // y=sigma(x);
    // console.log(y);
// //==============================================================================================================================
// 2. Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
    // var x = 5
    // function sigma(x){
    //     var sum = 1; 
    //     if(x>=0){
    //         for(var i=x;i>0;i--, x--){
    //             sum*=x
    //         }
    //     }
    //     else{
    //         for(var i=x;i<0;i++, x++){
    //             sum*=x
    //         }
    //     }
    //     return sum;
    // }
    // y=sigma(x);
    // console.log(y);
// //==============================================================================================================================
// 3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
    // x = 5;
    // function fibonacci(x){
    //     //ADD THE NUMBER 
    //     zeroVal = 0;
    //     firstVal = 1;
    //     sum=0;
    //     if(x==0){
    //         return sum;
    //     }
    //     else if(x==1){
    //         sum++;
    //         return sum;
    //     }
    //     else if(x>1){
    //         for(var i=2;i<=x;i++){
    //                 sum=zeroVal+firstVal
    //                 zeroVal = firstVal
    //                 firstVal = sum
    //         }
    //     }
    //     return sum;
    // }
    // z = fibonacci(x);
    // console.log(z);

    
    // ***3.1 Fibonacci: using Recursion
    // x=5;
    // function recursionFib(n){
    //     if(n==0 || n==1){
    //         return n;
    //         }
    //         return fibSum = recursionFib(n-2)+recursionFib(n-1);
    //     }
    //     sum = recursionFib(x);
    //     console.log(sum);
// //==============================================================================================================================
// 4. Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
    // var array =[0,1,2,3,4,5,6,7,8];
    // function secondToLast(arr){
    //     if(arr.length>1){
    //         return arr[arr.length-2];
    //     }
    //     else{
    //         return null;
    //     }
    // }
    // z = secondToLast(array);
    // console.log(z);
// //==============================================================================================================================
// 5. Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
    // var array =[0,1,2,3,4,5,6,7,8];
    // var nth = 5;
    // function secondToLast(arr, nth){
    //     if(nth<=arr.length-1){
    //         if(arr.length>1){
    //             return arr[arr.length-nth];
    //         }
    //         else{
    //             return null;
    //         }
    //     }
    //     else{
    //         return 'element '+nth+' does not exist.'
    //     }
    // }
    // z = secondToLast(array, nth);
    // console.log(z);
// //==============================================================================================================================
// 6. Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
    // var array =[42,10,200,3.14,4,5,6,14,8];
    // function secondLargest(arr){
    //     if(arr.length>1){
    //         if(arr[0]>arr[1]){
    //             var max = arr[0];
    //             var max2 = arr[1];
    //         }
    //         else{
    //             var max = arr[1];
    //             var max2 = arr[0];
    //         }
    //         for(var i=1;i<arr.length;i++){
    //             if(max<arr[i]){
    //                 max2=max;
    //                 max=arr[i];
    //             }
    //             else if(max2<arr[i]){
    //                 max2=arr[i];
    //             }
    //         }
    //         var newArr = [];
    //         newArr.push(max);
    //         newArr.push(max2);

    //         return newArr;
    //     }
    //     else{
    //         return null;
    //     }

    // }
    // newArray = secondLargest(array);
    // console.log(newArray);
// //==============================================================================================================================
// 7. Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
    // var array = [1,2,3,4,5,6,7,8];
    // function doubleTrouble(arr){
    //     var fixLen = arr.length;
    //     //ADD EACH ELEMENT TO THE END OF THE ARRAY
    //     for(var i=0;i<fixLen;i++){
    //         arr.push(arr[i])
    //     }

    //     console.log(fixLen);
    //     for(var x=0;x<fixLen;x++){//THIS FOR-LOOP IS TO COMPLETE THE PROCESS BELOW FOR EACH ELEMENT ADDED  
    //         for(var i=fixLen+x;i>(x*2);i--){//STARTING (1+END OF ORIGINAL ARRAY) MOVE ELEMENT TO THE FRONT JUST BEHIND CORRESPONDING DUPLICATE
    //             var temp = arr[i];
    //             arr[i] = arr[i-1];
    //             console.log(arr[i])
    //             arr[i-1] = temp;
    //             console.log(arr[i-1])
    //         }
    //     }
    // }
    // doubleTrouble(array);
    // console.log(array)
// //==============================================================================================================================
