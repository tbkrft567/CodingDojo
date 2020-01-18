class Bike{
   miles: number
   constructor(public price: number, public max_speed: number){
      this.price = price
      this.max_speed = max_speed
      this.miles = 0
   }

   displayInfo = () => {console.log(`Info for this bike:\n         Price: ${this.price}\n         Max_Speed: ${this.max_speed}\n         Miles: ${this.miles}\n`)}
   ride = () => {this.miles += 10; console.log("riding") ; return this}
   reverse = () => {
      if(this.miles - 5 < 0){ return this}
      else {this.miles -= 5}; 
      console.log("reversing"); 
      return this
   }
}

const bike1 = new Bike(125.99, 50);
const bike2 = new Bike(89.99, 25);
const bike3 = new Bike(250.99, 65);

bike1.displayInfo()
bike1.reverse().ride().ride().ride()
bike1.displayInfo()