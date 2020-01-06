function personConstructor(name, age){
   var self = this;
   var privateVariable = "This variable is private"
   var privateMethod = function(){
      console.log(`this is a private method for ${self.name}`)
      console.log(self);
   }

   this.name = name;
   this.age = age;
   this.greet = function(){
      console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`)
      console.log(`Also my privateVariable says: ${privateVariable}`)
      privateMethod()
   }
}

var Zach = new personConstructor("Zach", 28);

Zach.greet()
//private method must be run inside the object it belongs to
console.log(Zach.privateVariable) //This cannot be run outside of the object
console.log(Zach.privateMethod)