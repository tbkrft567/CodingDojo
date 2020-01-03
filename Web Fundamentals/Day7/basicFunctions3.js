// //==============================================================================================================================
// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
    // var array =[1,3,-5,7,-2];
    // function bigNumbers(arr){
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]>0){
    //             arr[i]='big';
    //         }
    //     }
    // }
    // bigNumbers(array);
    // console.log(array);
// //==============================================================================================================================
// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
    // var array =[1,3,-5,7,-2];
    // function maxMin(arr){
    //     var max = arr[0];
    //     var min = arr[0];
    //     for(var i=0;i<arr.length;i++){
    //         if(max<arr[i]){
    //             max=arr[i];
    //         }
    //         if(min>arr[i]){
    //             min=arr[i];
    //         }
    //     }
    //     var newArray = []
    //     newArray.push(max, min);
    //     return newArray;
    // }
    // var newArray = maxMin(array);
    // console.log(newArray);
// // //==============================================================================================================================
// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
    // var array =[2,3,-5,7,-2];
    // function printOneReturnAnother(arr){
    //     var flag = 0
    //     for(var i=0;i<arr.length;i++){
    //         if(i==arr.length-2){
    //             console.log(arr[i]);
    //         }
    //         if(flag == 0 && arr[i]%2==1){
    //             var x = arr[i];
    //             flag = 1;
    //         }
    //     }
    //     return x
    // }
    // returnedValue = printOneReturnAnother(array);
    // console.log(returnedValue);
// //==============================================================================================================================
// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
    // var array =[2,3,-5,7,-2];
    // function doubleItPlease(arr){
    //     for(var i=0;i<arr.length;i++){
    //         arr[i] = arr[i]*2;
    //     }
    // }
    // doubleItPlease(array);
    // console.log(array);
// //==============================================================================================================================
// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
    // var array =[2,3,-5,7,-2];
    // function countPositives(arr){
    //     var counter = 0
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]>=0){
    //             counter++;
    //         }
    //     }
    //     arr[arr.length] = counter;
    // }
    // countPositives(array);
    // console.log(array);
// //==============================================================================================================================
// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
    // var array =[2,10,5,-7,2,-2,-3,-5];
    // function threeInARows(arr){
    //     var onesAndZeros = []
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]<0){
    //             onesAndZeros.push(0);
    //         }
    //         else{
    //             onesAndZeros.push(1);
    //         }
    //     }
    //     var counter=1;
    //     for(var i=1;i<onesAndZeros.length;i++){
    //         if(onesAndZeros[i]==onesAndZeros[i-1]){
    //             counter++
    //             if(counter>=3 && onesAndZeros[i]==0){
    //                 console.log("that's Odd");
    //             }
    //             else if(counter>=3 && onesAndZeros[i]==1){
    //                 console.log("Even More So")
    //             }
    //         }
    //         else{
    //             counter = 1;
    //         }
    //     }
    // }
    // threeInARows(array);
    
// //==============================================================================================================================
// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
    // var array =[0,1,2,3,4,5,6,7,8];
    // function incrementTheSecond(arr){
    //     for(var i=0;i<arr.length;i++){
    //         if(i%2==1){
    //             arr[i]++;
    //             console.log(arr[i]);
    //         }
    //     }
    // }
    // incrementTheSecond(array);
    // console.log(array);
// //==============================================================================================================================
// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
    // var array = ['coding','dojo','ninja','Dallas'];
    // function stringToNumber(arr){
    //     for(var i=arr.length-1;i>0;i--){
    //         arr[i]=arr[i-1].length;
    //     }
    // }    
    // console.log(array);
    // stringToNumber(array);
    // console.log(array);
// //==============================================================================================================================
// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
    // var array =[0,1,2,3,4,5,6,7,8];
    // function addSeven(arr){
    //     var newArray = [];
    //     for(var i=0;i<arr.length;i++){
    //         newArray.push(arr[i]);
    //         newArray[i]+=7;
    //     }
    //     return newArray;
    // }
    // var newArray = addSeven(array);
    // console.log('array:', array,'newArray:',newArray);

// //==============================================================================================================================
// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
    // var array =[0,1,2,3,4,5,6,7,8];
    // function reverseArray(arr){
    //     for(var i=0;i<arr.length/2;i++){
    //         var temp = arr[arr.length-1-i];
    //         arr[arr.length-1-i] = arr[i];
    //         arr[i]=temp;
    //     }
    // }
    // reverseArray(array);
    // console.log(array);
// //==============================================================================================================================
// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
    // var array =[0,1,-2,3,4,-5,6,7,8];
    // function makeNegative(arr){
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]>0){
    //             arr[i]*=-1;
    //         }
    //     }
    // }
    // makeNegative(array);
    // console.log(array);
// //==============================================================================================================================
// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
    // var array =[0,1,"food",3,4,"food",6,7,8];
    // function alwaysHungry(arr){
    //     var counter = 0
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]=='food'){
    //             console.log('yummy');
    //             counter++
    //         }
    //     }
    //     if(counter==0){
    //         console.log("I'm Hungry")
    //     }
    // }
    // alwaysHungry(array);
// //==============================================================================================================================

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
    // var array =[0,1,2,3,4,5,6,7,8];
    // function reverseArray(arr){
    //     for(var i=0;i<arr.length/2;i++){
    //         if(i%2==0){
    //             var temp = arr[arr.length-1-i];
    //             arr[arr.length-1-i] = arr[i];
    //             arr[i]=temp;
    //         }
    //     }
    // }
    // reverseArray(array);
    // console.log(array);
// //==============================================================================================================================
// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
    // var array =[0,1,2,3,4,5,6,7,8];
    // var mult = 3;
    // function scaleUp(arr, num){
    //     for(var i=0;i<arr.length;i++){
    //         arr[i]*=num;
    //     }
    // }
    // scaleUp(array, mult);
    // console.log(array);
// //==============================================================================================================================
