var array= [1,2,3,4]

function test(arr){
    var fL=0;
    for(var i=0;i<arr.length;i++){
        fL++;
    }
    for(var i=0;i<fL; i++){
        arr.push(arr[i]);
    }
    for(i=0;i<fL;i++){
        console.log(arr.length);
        console.log(fL);
        console.log(arr.length-1-fL-i);
        console.log('next swap');
        for(x=arr.length-1;x>=arr.length-fL-i;x--){
            // console.log(temp,arr[x])
            var temp = arr[x];
            // console.log(arr[x],arr[x-1])
            arr[x] = arr[x-1];
            // console.log(arr[x-1],temp)
            arr[x-1] = temp;
        }
    }
}
test(array);
console.log(array);