//  Print 1 to x
    // function printUpTo(x){
    //     if(x<0){
    //         console.log(x);
    //         return false;
    //     }
    //     else{
    //         for(var i=0; i<x;i++){
    //             console.log(i);
    //         }
    //     }
    // }
    //   printUpTo(1000); // should print all the integers from 1 to 1000
    //   y = printUpTo(-10); // should return false
    //   console.log(y); // should print false

// PrintSum
    // function printSum(x){
    //     var sum = 0;
    //     for(var i=0;i<=x;i++){
    //         sum+=i;
    //         console.log('i = ',i, 'sum = ', sum);
    //     }
    //     return sum
    //   }
    //   y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
    //   console.log(y) // should print 32640

// PrintSumArray
    // function printSumArray(x){
    //     var sum = 0;
    //     for(var i=0; i<x.length; i++) {
    //     sum+=x[i];
    //     }
    //     return sum;
    // }
    // console.log( printSumArray([1,2,3]) ); // should log 6

//LargestElement
    // var array = [1,30,5,7];
    // var max=array[0];
    // function largestArray(arr){
    //     for(var i=1;i<arr.length;i++){
    //         if(max<arr[i]){
    //             max=arr[i];
    //         }
    //     }
    //     return max;
    // }
    // max = largestArray(array);
    // console.log(max);