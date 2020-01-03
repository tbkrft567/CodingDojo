//Min to Front
    // var array = [4,2,1,3,5]; 

    //This has been modified

    // function minToFront(arr){
    //     min = arr[0];
    //     index = 0;
    //     for(var i=1;i<arr.length;i++){
    //         if(min>arr[i]){
    //             min = arr[i];
    //             index = i;
    //         }
    //     }
    //     for(var i=index; i>0; i--){
    //         var temp = arr[i];
    //         arr[i] = arr[i-1];
    //         arr[i-1] = temp;
    //     }
    // }
    // minToFront(array);
    // console.log(array);

//reverse
    // var array = [8,7,6,5,4,3,2,1]
    
    // function Reverse(arr){
    //     for(var i=0; i<arr.length-1-i; i++){
    //         var temp = arr[i];
    //         arr[i] = arr[arr.length-1-i];
    //         arr[arr.length-1-i] = temp;
    //     }
    // }
    // Reverse(array);
    // console.log(array);
    
//Rotate
    // var array = [8,7,6,5,4,3,2,1];
    // array = [1,2,3]
    // shiftIncrement = 1
    // function shiftBy(arr, shiftIncrement){
    //     if(shiftIncrement != arr.length){
    //         for(var i=0;i<shiftIncrement;i++){
    //             var temp = arr[0];
    //             arr[0]=arr[arr.length-1];
    //             for(var x=0;x<array.length-1;x++){
    //                 var temp2 = arr[x+1];
    //                 arr[x+1] = temp;
    //                 temp = temp2;    
    //             }
    //         }
    //     }
    // }
    // shiftBy(array, shiftIncrement);
    // console.log(array);
// Filter Range
    // var array = [8,7,6,5,4,3,2,1];
    // var min = 3;
    // var max = 6;

    // function filterRange(arr){
    //     for(var i=arr.length-1; i>=0;i--){
    //         if(arr[i]<min){
    //             arr.pop();
    //         }
    //     }
    //     for(var i=0;i<array.length;i++){
    //         console.log(arr[i]);
            
    //         if(arr[i]>max){
    //             for(var x=0;x<array.length-1;x++){
    //                 var temp = arr[x];
    //                 arr[x]=arr[x+1];
    //                 arr[x+1] = temp;
    //             }
    //             arr.pop();
    //             i--;
    //         }
    //     }
    // }
    // filterRange(array);
    // console.log(array);
//concat
    // var array1 = [1,2];
    // var array2 = ['A','B'];

    // function concatArrays(arr1, arr2){
    //     var newArray = []
    //     for(var i=0; i<arr1.length;i++){
    //         newArray.push(arr1[i]);
    //     }
    //     for(var i=0; i<arr2.length;i++){
    //         newArray.push(arr2[i]);
    //     }
    //     return newArray;
    // }
    // newArray = concatArrays(array1, array2);
    // console.log(newArray)

//SkyLine Heights
    // var array = [-1,1,1,7,3];
    // function skyLine(arr){
    //     var newArray = [];
    //     for(var i=arr.length-1;i>=0;i--){
    //         if(arr[i]>arr[i-1]){
    //             newArray.push(arr[i]);
    //         }
    //     }
    //     return newArray;
    // }
    // var newArray = skyLine(array);
    // console.log(newArray);