//1. 
    //     var array = [1,2,3];
    //     var value = 2;  
    // function countPrintGreaterThan(arr,val){
    //     let count = 0;
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]>val){
    //             count++;
    //             console.log(arr[i]);
    //         }
    //     }
    //     console.log(count);
    // }
    // countPrintGreaterThan(array, value);

//2.

    // var array = [1,2,3];
    // function minMaxAvg(arr){
    //         var min = arr[0];
    //         var max = arr[0];
    //         var sum = 0;
        
    //         for(var i=0;i<arr.length;i++){
    //         if(min>arr[i]){
    //             min=arr[i];
    //         }
    //         if(max<arr[i]){
    //             max=arr[i];
    //         }
    //         sum+=arr[i];
    //         var avg = sum/arr.length;
    //     }
    //     console.log(min, max, avg);
    // }
    // minMaxAvg(array);

//3.
    // array = [1,-2,3];
    // function negativeDojo(arr){
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]<0){
    //             arr[i]='dojo';
    //         }
    //     }
    //     console.log(arr);
    // }
    // negativeDojo(array);

//4. 

    var array = [2,3,4,5,6,7];
    var idxStart = 1
    var idxEnd = 5
    function removeRange(arr, start, end){
        console.log('arr ', arr, 'start ', start, 'end ', end);
        var arrMaxIdx = arr.length-1;

        if(arrMaxIdx>=end && end>=start){
            var elementRemove = arrMaxIdx-(end-start+1)
            for(var i=arrMaxIdx;i>start;i--){
                var temp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp;
            }
            
            for(var i=arrMaxIdx; i>elementRemove;i--){
                console.log(arr);
                arr.pop();
            }
            //WITH INDEX RANGE, MOVE THIS RANGE TO THE END OF THE ARRAY; FOLLOWED BY POP()
            // DIFF OF arrMaxIdx AND IDXEND IS THE MOVEMENT FOR INXSTART
            //IF ARRINDEXLENGTH = 0 THEN YOU CAN BEGIN POP()
            //arridxLegnth = 5; idxEnd = 4;  elementRemove = 1
            //arr[2-4] need to move 1 space
            //pop() occurs the difference between end-start
            console.log(arr);
        }
        else if(arrMaxIdx<end){
            console.log('Range greater than the array length');
        }
        else if(end<start){
            console.log('start must be less than End');
        }
    }
    removeRange(array, idxStart, idxEnd);
