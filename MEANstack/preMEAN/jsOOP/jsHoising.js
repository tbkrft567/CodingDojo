
// console.log(hello);
// var hello = 'world';
var hello = 'world';
console.log("1. "+hello);

// var needle = 'haystack';
// test();
// function test() {
//    var needle = 'magnet';
//    console.log(needle);
// }
var needle = 'haystack';
function test() {
   var needle = 'magnet';
   console.log("2. "+needle);
}
test();


// var brendan = 'super cool';
// function print() {
//    brendan = 'only okay';
//    console.log(brendan);
// }
// console.log(brendan);
var brendan = 'super cool';
function print() {
   brendan = 'only okay';
   console.log("3. "+brendan);
}
print()
console.log(brendan);

// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//    food = 'half-chicken';
//    console.log(food);
//    var food = 'gone';
// }
var food = 'chicken';
console.log("4. "+food);
function eat() {
   food = 'half-chicken';
   console.log(food);
   var food = 'gone';
   console.log(food);
}
eat();

// mean();
// console.log(food);
// var mean = function () {
//    food = "chicken";
//    console.log(food);
//    var food = "fish";
//    console.log(food);
// }
// console.log(food);
var mean = function () {
   food = "chicken";
   console.log("5. "+food);
   var food = "fish";
   console.log(food);
}
mean();
console.log(food);


// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//    genre = "rock";
//    console.log(genre);
//    var genre = "r&b";
//    console.log(genre);
// }
// console.log(genre);
var genre = "disco";
console.log("6. "+genre);
function rewind() {
   genre = "rock";
   console.log(genre);
   var genre = "r&b";
   console.log(genre);
}
rewind();
console.log(genre);

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//    dojo = "seattle";
//    console.log(dojo);
//    var dojo = "burbank";
//    console.log(dojo);
// }
// console.log(dojo);
dojo = "san jose";
console.log("7. "+dojo);
function learn() {
   dojo = "seattle";
   console.log(dojo);
   var dojo = "burbank";
   console.log(dojo);
}
learn();
console.log(dojo);

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//    const dojo = {};
//    dojo.name = name;
//    dojo.students = students;
//    if (dojo.students > 50) {
//       dojo.hiring = true;
//    }
//    else if (dojo.students <= 0) {
//       dojo = "closed for now";
//    }
//    return dojo;
// }
function makeDojo(name, students) {
   const dojo = {};
   dojo.name = name;
   dojo.students = students;
   if (dojo.students > 50) {
      dojo.hiring = true;
      dojo.message = "We are hiring now"
   }
   else if (dojo.students <= 0) {
      dojo.message = "closed for now";
   }
   return dojo.message;
}
console.log("8. "+makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));