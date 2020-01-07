module.exports = function () {
   return {
      greet: function () {
         console.log("We are now using a module!")
      },
      add: function (a, b) {
         console.log(`the sum is: ${a + b}`)
      }
   }
}