//`************** maxMinAvg
function maxMinAvg(arr) {
   max = arr[0]
   min = arr[0]
   sum = 0
   for (i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
         max = arr[i]
      }
      if (min > arr[i]) {
         max = arr[i]
      }
      sum += arr[i]
   }
   avg = sum / arr.length
   return `maxMinAvg: The minimum is ${min}, the maximum is ${max}, and the average is ${avg}`
}
array = [1, -2, 9, 4]
x = maxMinAvg(array)
console.log(x)

//`************** fizzBuzz

function fizzBuzz(num) {
   if (num > 0) {
      string = ""
      for (i = 1; i <= num; i++ ){
         if (i % 3 == 0 && i % 5 == 0) {
            string+="FizzBuzz"
         }
         else if (i % 3 == 0) {
            string+="Fizz"
         }
         else if (i % 5 == 0) {
            string+="Buzz"
         }
         else {
            string+=i
         }
         if (i < num-1){
            string += ", "
         }
         if (i == num-1){
            string += ", and "
         }
      }
      return string
   }
   else{
      return "Parameter must be a positive number"
   }
}
num = prompt("Enter a number to loop through")
value = fizzBuzz(Number(num))
console.log(`FizzBuzz: ${value}`)

//`************** BracesValid

function bracesValid(str){
   if (str.length > 1){
      newStr = ""
      for (i = 0; i <= str.length; i++){ 
         //Add open brace to string to prepare the order the braces need to be closed 
         if (str.charAt(i)=="("){
            newStr += "("
            continue;
         }
         else if (str.charAt(i)=="{"){
            newStr += "{"
            continue;
         }
         else if (str.charAt(i)=="["){
            newStr += "["
            continue;
         }

         //If close brace appears check if the last open brace can be closed with the current brace type
         //if so, then remove the open brace from the string indicating the brace has been closed, 
         //if not, string is invalid because the braces are out of order
         if (str.charAt(i)==")"){
            if (newStr == 0){
               return false;
            }
            else{
               if (newStr.charAt(newStr.length-1) == "("){
                  newStr = newStr.substring(0, newStr.length-1);
                  continue;
               }
               else{
                  return false
               }
            }
         }
         else if (str.charAt(i)=="}"){
            if (newStr == 0){
               return false;
            }
            else{
               if (newStr.charAt(newStr.length-1) == "{"){
                  newStr = newStr.substring(0, newStr.length-1);
                  continue;
               }
               else{
                  return false
               }
            }
         }
         else if (str.charAt(i)=="]"){
            if (newStr == 0){
               return false;
            }
            else{
               if (newStr.charAt(newStr.length-1) == "["){
                  newStr = newStr.substring(0, newStr.length-1);
                  continue;
               }
               else{
                  return false
               }
            }
         }
      }
      if(newStr == ""){
         return true;
      }
      else {
         console.log(newStr)
         return false;
      }
   }
   else {
      return false
   }
}
string = "{{())}}[]"
isValid = bracesValid(string)
console.log(`BraceValid: The function returned "${string}" as "${isValid}".`)

//`************** BigO Notation

function printArray(arr){
       for(var i=0; i<arr.length; i++){
           console.log(arr[i]);
       }
   }
function findNth(arr, n){
       console.log(arr[n]);
   }
function halving(n){
       var count = 0;
       while(n > 1){
           n = n/2;
           count++;
       }
       return count;
   }
function identityMatrix(n){
   var matrix = [];
   for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}

//`************** BubbleSort

function bubbleSort(arr) {
   sumi = 0
   sumx = 0
   for (i = 0, set = arr.length - 1; i < arr.length - 1; i++) {
      sumi++
      count = 0
      x = 0
      while (x < arr.length) {
         sumx++
         if (arr[x] > arr[x + 1]) {
            temp = arr[x]
            arr[x] = arr[x + 1]
            arr[x + 1] = temp
         }
         else {
            count++
            if (count == arr.length) {
               break;
            }
         }
         x++
      }
      if (count == arr.length) {
         break;
      }
   }
   return arr
}
array = [3,1,5,6,2,4,7,8]
newArray = bubbleSort(array)
console.log(`BubbleSort: ${newArray}`)
console.log("printArray: O(n);\nfindNth: O(1);\nhalving: O(n);\nidentifyMatrix: O(n2);")

function coinChange(num) {
   denominations = {
      'Dollars': 0,
      'Half-Dollars': 0,
      'Quarters': 0,
      'Dimes': 0,
      'Nickels': 0,
      'Pennies': 0,
   }
   denominations['Dollars'] = Math.floor(num / 100)
   num = num % 100
   denominations['Half-Dollars'] = Math.floor(num / 50)
   num = num % 50
   denominations['Quarters'] = Math.floor(num / 25)
   num = num % 25
   denominations['Dimes'] = Math.floor(num / 10)
   num = num % 10
   denominations['Nickels'] = Math.floor(num / 5)
   num = num % 5
   denominations['Pennies'] = Math.floor(num / 1)
   num = num % 1
   return denominations
}

number = prompt("How much change do you have?")
coinDenominations = coinChange(Number(number))
console.log("Coin Change:")
console.log(coinDenominations)

// `*******************Users

users = [
   {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
         music: ["guitar", "flute"],
         dance: ["tap", "salsa"],
         television: ["Black Mirror", "Stranger Things"]
      }
   },
   {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
         food: ["honey", "honeycomb"],
         flowers: ["honeysuckle"],
         mysteries: ["Heffalumps"]
      }
   },
   {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
         space: ["stars", "planets", "improbability"],
         home: ["tea", "yellow bulldozers"]
      }
   }
]

function userLanguage(arr) {
   string = ""
   for (i = 0; i < arr.length; i++) {
      
      string += users[i]['fname'] + " " + users[i]['lname'] + " knows "
      for (x = 0; x < users[i]['languages'].length; x++) {
         if (x != users[i]['languages'].length - 1) {
            string += users[i]['languages'][x] + ", "
         }
         else {
            string += "and " + users[i]['languages'][x] + ".\n"
         }
      }

      string += users[i]['fname'] + " " + users[i]['lname'] + " also interested in"
      keyCount = 1
      //Interest is a dict{} of arrs[]; Loop through keys and Key's array
      for (var key in users[i]['interests']) { //Users Interest Dictionary
         for(x=0;x<users[i]['interests'][key].length;x++){ //Each Key's array
            if(keyCount == Object.keys(users[i]['interests']).length && x == users[i]['interests'][key].length-1){
               string += "and "+users[i]['interests'][key][x]+".\n"
               keyCount
            }
            else{
               string += " "+users[i]['interests'][key][x]+", "
            }
         }
         keyCount++
      }
   }
   return string
}
languagesPerUser = userLanguage(users)
console.log("Users:\n"+languagesPerUser)

// `*********************  Binary Search
// function binarySearch(arr, num){
//    remainingElements = arr.length
//    currentIndex = 0
//    startIndex = 0
//    endIndex = arr.length
//    while(remainingElements >= 3){
//       // console.log(remainingElements, startIndex, endIndex, currentIndex);
//       currentIndex = startIndex+Math.ceil(remainingElements/2)
//       if (arr[currentIndex] == num){
//          return true
//       }
//       if (arr[currentIndex] < num){
//          remainingElements = Math.abs(endIndex-currentIndex)
//          startIndex = currentIndex
//       }
//       else if (arr[currentIndex] > num){
//          remainingElements = Math.abs(startIndex-currentIndex)
//          endIndex = currentIndex
//       }
//       console.log(remainingElements)
//       if(remainingElements == 2){
//          for(i=startIndex;i<=endIndex-1;i++){
//             console.log(i)
//             if (arr[i] == num){
//                return true
//             }
//          }
//       }
//    }
//    console.log(remainingElements, startIndex, endIndex, currentIndex);
//    return false
// }
// array = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200]
// number = 93  
// isFound = binarySearch(array, number)
// console.log(`Binary Search: Whether is num: ${number} is found in the array is "${isFound}"`);

// console.log('hello')