// Remove Negatives
    // var array = [-1, 2,-3,5,9,8,-4,5,-7]

    // function removeNegatives(arr){
    //     var newArray = [];
    //     for(var i=0;i<arr.length; i++){
    //         if(arr[i]>0){
    //             newArray.push(arr[i]);
    //         }
    //     }
    //     return newArray;
    // }
    // var newArray = removeNegatives(array);
    // console.log(newArray);

//Second-to-Last
    // var array = [1]//[42, true, 4, "Katie", 7]

    // function returnSecondToLast(arr){
    //     if(arr.length>1){
    //         var x = arr[arr.length-2];
    //     }
    //     else{
    //         var x = null;
    //     }
    //     return x;
    // }
    // x = returnSecondToLast(array);
    // console.log(x);

//Nth-To-Last
    // var array = [42, true, 4, "Katie", 7]
    // var Nth = 5;

    // function returnSecondToLast(arr, Nth){
    //     if(arr.length>=Nth){
    //         var x = arr[arr.length-Nth];
    //     }
    //     else{
    //         var x = null;
    //     }
    //     return x;
    // }
    // x = returnSecondToLast(array, Nth);
    // console.log(x);

//Second-Largest
    // var array = [42,1,42,Math.PI, 7];
    // /*THIS NEEDS TO ACOUNT FOR DUPLICATES*/ 
    // function secondLargest(arr){
    //     if(arr.length>1){
    //         var indexArray = []; //ARRAY NEEDED TO STORE ALL MAX INDEXES 
    //         var max = arr[0]
    //         for(var i=0;i<arr.length;i++){
    //             if(max<=arr[i]){ //IF TRUE RECORD NEW max VALUE AND index IN indexArray[]
    //                 max = arr[i];
    //                 indexArray.push(i);
    //             }
    //         }
    //         //FIND FIRST VALUE NOT INDICATED AS THE MAX VALUE
    //         var skipper=0;
    //         for(var i=0;i<arr.length;i++){
    //             for(var x=0;x<indexArray.length;x++){
    //                 //DETERMINE WHETHER THE CURRENT INDEX OF i IS IN THE indexArray INDICATING IT AS THE POSITION OF A MAX VALUE
    //                 if(i==indexArray[x]){
    //                     skipper = 1;
    //                     break; 
    //                 }
    //             }
    //             //IF i WAS NOT FOUND IN THE indexArray THEN THIS CAN BE THE STARTING POINT TO FIND THE nextMax VALUE
    //             if(skipper!=1){
    //                 nextMax=arr[i];
    //                 break;
    //             }
    //             skipper=0 //RESET VALUE FOR NEXT VALUE IN arr
    //         }

    //         //LOOP THROUGH ALL VALUES TO DETERMINE THE nextMax
    //         for(var i=0;i<arr.length;i++){
    //             //LOOP THROUGH STORE INDEX VALUES FOR max VALUES; IF MATCHED, THEN INDEX WILL BE SKIPPPED AND NOT ASSIGNED AS nextMax
    //             skipper=0
    //             for(var x=0;x<indexArray.length;x++){
    //                 //SKIPPER INDICATES THIS INDEX IS THE MAX VALUE, THEREFORE IT CANNOT BE THE *NEXT LARGEST*. 
    //                 if(indexArray[x]==i){
    //                     var skipper=1
    //                 }
    //             }
    //             if(skipper==1){ //INDEX FOUND TO BE OF MAX VALUE
    //                 continue;
    //             }
    //             else if(nextMax<arr[i]){
    //                 console.log('currMax: ',nextMax ,'arrVaue: ',  arr[i],'i: ',i);
    //                 nextMax=arr[i];
    //             }
    //         }
    //         return nextMax;
    //     }
    //     else{
    //         return null;
    //     }
    // }
    // x = secondLargest(array);
    // console.log(x);

    //Second Largest

        //SET THE BASIC CRITERIA
        //1. GREATER THAN ALL
        //2. LESS THAN LARGEST BUT GREATER THAN NEXT LARGEST
        //3. LESSER THAN ALL
    var array = [41,42,41,Math.PI, 7];
    function secondLargest(arr){
        if(arr[0]>arr[1]){
            maxValue = arr[0];
            secondMaxValue = arr[1];
        }
        else{
            maxValue = arr[1];
            secondMaxValue = arr[0];
        }
        for(var i=1;i<arr.length;i++){
            console.log(maxValue, arr[i], secondMaxValue);
            if(maxValue<arr[i]){
                secondMaxValue = maxValue
                maxValue = arr[i]
            }
            else if(secondMaxValue<arr[i]){
                // console.log(i,arr[i]);
                secondMaxValue = arr[i];
            }
        }
        return secondMaxValue;
    }
    x = secondLargest(array);
    console.log('second Largest Value', x);
        

//Nth-Largest
// var array = [42,1,42,Math.PI, 7];
// var n_thValue = 4;
// /*THIS NEEDS TO ACOUNT FOR DUPLICATES*/ 
// function n_thLargest(arr, nth){
//     if(arr.length>1){
        
//         //====================================================
//         var indexArray = []; //ARRAY NEEDED TO STORE ALL MAX INDEXES 
//         var max = arr[0]
//         for(var i=0;i<arr.length;i++){
//             if(max<=arr[i]){ //IF TRUE RECORD NEW max VALUE AND index IN indexArray[]
//                 max = arr[i];
//                 indexArray.push(i);
//             }
//         }

//         //====================================================
//         //FIND FIRST VALUE NOT INDICATED AS THE MAX VALUE
//         var skipper=0;
//         for(var i=0;i<arr.length;i++){
//             for(var x=0;x<indexArray.length;x++){
//                 //DETERMINE WHETHER THE CURRENT INDEX OF i IS IN THE indexArray INDICATING IT AS THE POSITION OF A MAX VALUE
//                 if(i==indexArray[x]){
//                     skipper = 1;
//                     break; 
//                 }
//             }
//             //IF i WAS NOT FOUND IN THE indexArray THEN THIS CAN BE THE STARTING POINT TO FIND THE nextMax VALUE
//             if(skipper!=1){
//                 nextMax=arr[i];
//                 break;
//             }
//             skipper=0 //RESET VALUE FOR NEXT VALUE IN arr
//         }

//         //====================================================
//         //LOOP THROUGH ALL VALUES TO DETERMINE THE nextMax
//         for(var i=0;i<arr.length;i++){
//             //LOOP THROUGH STORE INDEX VALUES FOR max VALUES; IF MATCHED, THEN INDEX WILL BE SKIPPPED AND NOT ASSIGNED AS nextMax
//             skipper=0
//             for(var x=0;x<indexArray.length;x++){
//                 //SKIPPER INDICATES THIS INDEX IS THE MAX VALUE, THEREFORE IT CANNOT BE THE *NEXT LARGEST*. 
//                 if(indexArray[x]==i){
//                     var skipper=1
//                 }
//             }
//             if(skipper==1){ //INDEX FOUND TO BE OF MAX VALUE
//                 continue;
//             }
//             else if(nextMax<arr[i]){
//                 console.log('currMax: ',nextMax ,'arrVaue: ',  arr[i],'i: ',i);
//                 nextMax=arr[i];
//             }
//         }
//         return nextMax;
//     }
    
// //====================================================================================================================================
// //====================================================================================================================================    
//     else{
//         return null;
//     }
// }
// x = n_thLargest(array, n_thLargest);
// console.log(x);