array = ['tree', 'free', 'have']
function Test(arr) {
    workingSuffix = ''
    officialSuffix = ''
    minWordLength = arr[0].length
    for (i = 1; i < arr.length; i++) { //Comparison should only go the length of the shortest word
        if (minWordLength > arr[i].length) {
            
            minWordLength = arr[i].length
        }
    }
    console.log(minWordLength)
    for (i = 1; i < arr.lenght; i++) { //the last letter of all must match to begin the process; otherwise return the original array unchanged
        if (arr[0].charAt(arr[0].length - 1) == arr[i].charAt(arr[i].length - 1)) {
            continue;
        }
        else {
            console.log('stopped')
            return arr;
        }
    }
    console.log('all letters matched')
    for (i = 0; i < arr.length - 1; i++) { //loop through each word
        for (x = arr[0].length - 2; x >= 0; x--) { //loop through each letter from the back (i=arr[0].length-2 because we already checked arr[0].length-1)
            if (arr[i].charAt(x) == arr[i + 1].charAt(x)) { //compare first and second word
                workingSuffix += arr[0].charAt(x)
                console.log(workingSuffix)
            }
            else {
                console.log('Move to Officialsuffix :'+workingSuffix)
                officialSuffix = workingSuffix
                workingSuffix = ''
                break;
            }
        }
    }
    for(i=0;i<arr.length;i++){
        arr[i]+=officialSuffix;
    }
    console.log(officialSuffix)
    return arr;
}
x = Test(array)
console.log(x)