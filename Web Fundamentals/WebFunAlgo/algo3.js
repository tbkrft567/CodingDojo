// //================================================================================================================
// function a(x,y){ //5 ~
//     return 5;
//   }
//   console.log(a(5,5))
// //================================================================================================================
// function a(x,y){ //[2,2,5], [2,2,5], [6,8,5], [6,8,5] ~
//     z = []
//     z.push(x);
//     z.push(y);
//     z.push(5);
//     console.log(z);
//     return z;
// }
// b = a(2,2)
// console.log(b);
// console.log(a(6,8));
// //================================================================================================================
// function a(x){ //[2,2,5] ~
//     z = [];
//     z.push(x);
//     z.pop();
//     z.push(x);
//     z.push(x);
//     return z;
//  }
//  y = a(2);
//  y.push(5);
//  console.log(y);
// //================================================================================================================
// function a(x){ //true ~
//     if(x[0] <x [1]) {
//         return true;
//     }
//     else {
//         return false;
//     }
//  }
//  b = a([2,3,4,5])
//  console.log(b);
//================================================================================================================
        //***
        // function a(x){ //["Coding","Coding","Coding","Coding"] **undefined
        //     for(var i=0; i<x.length; i++){
        //         if(x[i] > 0){
        //             x[i] = "Coding"
        //         }
        //     }
        // }
        // console.log(a([1,2,3,4]))
//================================================================================================================
// function a(x){ //[5,'Coding','Dojo',4] **undefined
//     for(var i=0; i<x.length; i++){
//         if(x[i] > 5){
//             x[i] = "Coding"
//         }
//         else if(x[i] < 0){
//             x[i] = "Dojo"
//      }
//    }
// }
// console.log(a([5,7,-1,4]))
//================================================================================================================
// function a(x){ //10 ~
//     if(x[0] > x[1]) {
//      return x[1];
//     }
//     return 10;
//  }
//  b = a([5,10])
//  console.log(b);
// //================================================================================================================
// function sum(x){ //undefined **blank
//     sum = 0;
//     for(var i=0; i<x.length; i++){
//        sum = sum + x[i];
//        console.log(sum);
//     }
//     return sum;
// }



// // 1.
// function printAverage(x){
//     sum = 0;
//     for(var i=0; i<x.length; i++){
//         sum+=x[i];
//     }
//     return sum/x.length;
//  }
//  y = printAverage([1,2,3]);
//  console.log(y); // should log 2
   
//  y = printAverage([5,2,8]);
//  console.log(y); // should log 5

// // 2.
// function returnOddArray(){
//     var newArray = [];
//     for(var i=1;i<=255;i+=2){
//         newArray.push(i);
//     }
//     return newArray;
//  }
//  y = returnOddArray();
//  console.log(y); // should log [1,3,5,...,253,255]

// // 3.
// function squareValue(x){
//     for(var i=0;i<x.length;i++){
//         x[i] = x[i]*x[i];
//     }
//     return x;
//  }
//  y = squareValue([1,2,3]);
//  console.log(y); // should log [1,4,9]
   
//  y = squareValue([2,5,8]);
//  console.log(y); // should log [4,25,64]