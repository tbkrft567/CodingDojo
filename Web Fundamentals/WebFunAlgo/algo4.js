// // 1.
// function greaterThanY(arr, y){
//     var counter = 0;
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>y){
//             counter++;
//         }
//     }
//     return counter;
// }
// var array = [15,4,3,9];
// b = greaterThanY(array, 5);
// console.log(b);

// // 2.
// function maxMinAvg(arr){
//     max=arr[0]
//     min=arr[0]
//     sum=0
//     for(var i=0;i<arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i];
//         }
//         if(min>arr[i]){
//             min=arr[i]
//         }
//         sum+=arr[i];
//     }
//     var newArray = []
//     newArray.push(max);
//     newArray.push(min);
//     newArray.push(sum/arr.length);
//     return newArray;
// }
// var array = [15,4,3,9];
// var newArray = maxMinAvg(array);
// console.log(newArray);

// // 3.
// var array = [15,-4,-3,9];
// function replaceNegatives(arr){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]<0){
//             arr[i] = 'Dojo';
//         }
//     }
// }
// replaceNegatives(array);
// console.log(array);

// // 4.
// var array = [2,3,4,5,6,7]
// function rangedFilter(arr, start, end){
//     for(var x=0;x<end-start+1;x++){
//         for(var i=end-x; i<arr.length-1;i++){
//             var temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp; 
//         }
//         arr.pop();
//     }
// }
// rangedFilter(array, 2,5);
// console.log(array);

