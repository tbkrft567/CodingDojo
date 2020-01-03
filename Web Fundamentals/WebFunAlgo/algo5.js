// 1.
    // var array = [1,2,-1,-3] 
    // function setToZero(arr){
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]<0){
    //             arr[i]=0;
    //         }
    //     }
    // }
    // setToZero(array);
    // console.log(array);

// 2.
    // var array = [1,2,-1,-3] 
    // function shifter(arr){
    //     arr.push(0);
    //     for(var i=0;i<arr.length-1;i++){
    //         var temp = arr[i];
    //         arr[i]=arr[i+1];
    //         arr[i+1] = temp;
    //     }
    //     arr.pop();
    // }
    // shifter(array);
    // console.log(array);
// 3.
    // var array = [1,2,-1,-3] 
    // function reverseOrder(arr){
    //     for(var i=0;i<arr.length/2;i++){
    //         var temp = arr[i];
    //         arr[i] = arr[arr.length-1-i];
    //         arr[arr.length-1-i] = temp;
    //     }
    // }
    // reverseOrder(array);
    // console.log(array);
// 4.
    // var array = [1,2,3,4,5]
    // function doubleTrouble(arr){
    //     var newArr = []
    //     fixLen = arr.length
    //     for(var x=0; x<2;x++){
    //         for(var i=0;i<fixLen;i++){
    //             newArr.push(arr[i])
    //         }
    //     }
    //     for(var x=0;x<fixLen;x++){
    //         for(var i=fixLen+x;i>(x*2);i--){
    //             var temp = newArr[i];
    //             newArr[i] = newArr[i-1];
    //             newArr[i-1] = temp;
    //         }
    //     }
    //     return newArr
    // }
    // var newArray = doubleTrouble(array);
    // console.log(newArray);