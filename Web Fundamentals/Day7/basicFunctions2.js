// //==============================================================================================================================

// 1	Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
    // function arrayCounter(){
    //     var arr=[];
    //     for(var i=1;i<=255;i++){
    //         arr.push(i);
    //     }
    //     return arr;
    // }
    // array = arrayCounter();
    // console.log(array);
// //==============================================================================================================================

// 2	Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
    // function sumEvens(){
    //     var sum=0;
    //     for(var i=0;i<=1000;i+=2){
    //         sum+=i;
    //     }
    //     return sum;
    // }
    // totalSum = sumEvens();
    // console.log(totalSum);
// //==============================================================================================================================

// 3	Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
    // function sumOdds(){
    //     var sum=0;
    //     for(var i=1;i<=5000;i+=2){
    //         sum+=i;
    //         console.log(i);s
    //     }
    //     return sum;
    // }
    // totalSum = sumOdds();
    // console.log(totalSum);
// //==============================================================================================================================

// 4	Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
    // var array = [1,2,3];
    // var sum = 0;
    // function sumArray(arr){
    //     for(var i=0;i<arr.length;i++){
    //         sum+=arr[i];
    //     }
    //     return sum;
    // }
    // totalSum = sumArray(array);
    // console.log(totalSum);
// //==============================================================================================================================

// 5	Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
    // var array = [1,3,5,7,2];
    // function findMax(arr){
    //     var max = array[0];
    //     for(var i=0;i<arr.length;i++){
    //         if(max<arr[i]){
    //             max=arr[i];
    //         }
    //     }
    //     return max;
    // }
    // max = findMax(array);
    // console.log(max);
// //==============================================================================================================================

// 6	Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
    // var array =[1,3,5,7,2];
    // function findMax(arr){
    //     var sum = 0;
    //     for(var i=0;i<arr.length;i++){
    //         sum+=arr[i];
    //     }
    //     return sum/arr.length;
    // }
    // avg = findMax(array);
    // console.log(avg);
// //==============================================================================================================================

// 7	Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
    // function returnOdds(){
    //     var arr = []
    //     for(var i=0;i<=50;i++){
    //         if(i%2==1){
    //             arr.push(i);
    //         }
    //     }
    //     return arr;
    // }
    // newArray = returnOdds();
    // console.log(newArray);
// //==============================================================================================================================

// 8	Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
    // var array =[1,3,5,7,2];
    // var greaterThan = 4;
    // function greaterThanY(arr, val){
    //     var counter = 0;
    //     for(var i=0;i<arr.length;i++){
    //         if(val<arr[i]){
    //             counter++
    //         }
    //     }
    //     return counter;
    // }
    // numberGreater = greaterThanY(array, greaterThan);
    // console.log(numberGreater);
// //==============================================================================================================================

// 9	Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
    // var array =[1,3,5,7,2];
    // function squaredValues(arr){
    //     for(var i=0;i<arr.length;i++){
    //         arr[i]=arr[i]*arr[i];
    //     }
    //     return arr;
    // }
    // squaredValues(array);
    // console.log(array);
// //==============================================================================================================================

// 10	Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
    // var array =[1,3,-5,7,-2];    
    // function replaceNegatives(arr){
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]<0){
    //             arr[i]=0
    //         }
    //     }
    // }
    // replaceNegatives(array);
    // console.log(array);
// //==============================================================================================================================

// 11	Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
    // var array =[1,3,-5,7,-2];
    // function maxMinAvg(arr){
    //     var newArray = []
    //     var max = arr[0]
    //     var min = arr[0]
    //     var sum = 0
    //     for(var i=0;i<arr.length;i++){
    //         if(max<arr[i]){
    //             max=arr[i]
    //         }
    //         if(min>arr[i]){
    //             min=arr[i]
    //         }
    //         sum+=arr[i]
    //     }
    //     avg = sum/arr.length;
    //     newArray.push(max);
    //     newArray.push(min);
    //     newArray.push(sum);
    //     return newArray
    // }
    // var newArray = maxMinAvg(array);
    // console.log(newArray);
// //==============================================================================================================================

// 12	Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
    // var array =[1,3,-5,7,-2];
    // function swapFirstLast(arr){
    //     var temp = arr[arr.length-1];
    //     arr[arr.length-1] = arr[0];
    //     arr[0] = temp;
    // }
    // swapFirstLast(array);
    // console.log(array)
// //==============================================================================================================================

// 13	Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
    // var array =[1,3,-5,7,-2];
    // function numberToString(arr){
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]<0){
    //             arr[i] = 'Dojo';
    //         }
    //     }
    // }
    // numberToString(array);
    // console.log(array);
