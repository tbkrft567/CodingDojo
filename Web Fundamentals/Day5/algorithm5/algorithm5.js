
//1.
    // var array=[1,2,-1,-3];
    // function setToZero(arr){
        //     for(var i=0; i<arr.length; i++){
    //         if(arr[i]<0)
    //         {
        //             arr[i] = 0;
        //         }
    //     }
    // }
    // setToZero(array);
    // console.log(array);
    
//2.
    // var array=[1,2,-1,-3];
    // function moveAndDrop(arr){
    //     for(var i=0; i<arr.length; i++){
    //         arr[i]=arr[i+1];
    //     }
    //     arr[arr.length-1] = 0;
    // }
    // moveAndDrop(array);
    // console.log(array);

//3.
    // var array = [5,4,3,2,1,0];
    // function reverseOrder(arr){
    //     midPoint = Math.floor(arr.length/2)
    //     console.log(midPoint);for(var i=0; i<midPoint;i++){
    //         var temp = arr[i];
    //         arr[i] = arr[arr.length-1-i];
    //         console.log()
    //         arr[arr.length-1-i] = temp;
    //     }
    // }
    // reverseOrder(array);
    // console.log(array);

//4.
    var array = [0,1,2,3];
    var fixLength = array.length
    function doubletrouble(arr, fixLength){
        for(var i=0;i<fixLength;i++){
            arr.push(arr[i]);
            console.log(fixLength);
            console.log(arr.length);
        }
        console.log(arr);
        for(var i=0;i<fixLength;i++){
            console.log('Next Swap ', arr);
            for(var x=fixLength+i;x>0+(i*2); x--){
                var temp = arr[x];
                arr[x] = arr[x-1];
                arr[x-1] = temp;
            }
        }
    }
    doubletrouble(array, fixLength);
    console.log(array);

    
