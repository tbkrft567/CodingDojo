


var heffalumps = {
   character: "Heffalumps",
   greet: function () {
      alert("You know we never really did capture a heffalump that day. It was mnore like...Lumpy captured all of u.s")
   }
}
var eeyore = {
   character: "Eeyore", 
   greet: function () {
      alert("If I close my eyes will the mess disappear?")
   }
}
var kanga = {
   character: "Kanga", 
   greet: function () {
      alert("Some people care too much I thin it's called love.")
   }
}
var owl = {
   character: "Owl",
   greet: function () {
      alert("Sometimes the smallest things take up the most room in your heart.")
   }
}
var christopherRobin = {
   character: "Christopher Robin",
   greet: function () {
      alert("Any day spent with you is my favorite day, so today is my new favorite day.")
   }
}
var rabbit = {
   character: "Rabbit",
   greet: function () {
      alert("If the person you are talking to doesn't appear to be listening, be patient. It may simply be that he has a small piece of fluff in his ear.")
   }
}
var gopher = {
   character: "Gopher",
   greet: function () {
      alert("I-i-i'm not in the book but I'm at your s s service...")
   }
}
var piglet = {
   character: "Piglet",
   greet: function () {
      alert("If there ever comes a day when we can't be together keep me in your heart - i'll stay forever.")
   }
}
var winnieThePooh = {
   character: "Winnie the Pooh",
   greet: function () {
      alert("People say nothing is impossible, but I do nothing every day.")
   }
}
var bees = {
   character: "Bees",
   greet: function () {
      alert("You never can tell with bees.")
   }
}
var tigger = {
   character: "Tigger",
   greet: function () {
      alert("Once in awhile someone amazing comes along...and here I am!")
   }
}


locations = [heffalumps, eeyore, kanga, owl, christopherRobin, rabbit, gopher, piglet, winnieThePooh, bees, tigger]
playerLocation = locations[Math.floor(Math.random()*locations.length-1)]

var player = { 
   location: playerLocation,
   honey: false
 }

heffalumps.west = eeyore
eeyore.east = heffalumps
eeyore.south = kanga
kanga.north = eeyore
kanga.south = christopherRobin
christopherRobin.north = kanga
christopherRobin.east = rabbit
christopherRobin.south = winnieThePooh
christopherRobin.west = owl
rabbit.west = christopherRobin
rabbit.east = gopher
rabbit.south = bees
gopher.west = rabbit
bees.north = rabbit
bees.west = winnieThePooh
winnieThePooh.north = christopherRobin
winnieThePooh.east = bees
winnieThePooh.south = tigger
winnieThePooh.west = piglet
piglet.east = winnieThePooh
piglet.north = owl
owl.east = christopherRobin
owl.south = piglet
tigger.north = winnieThePooh

function mission(){
   while(typeof playerDestination == "undefined" || playerDestination == playerLocation || playerDestination == bees || playerLocation == bees ){
      playerDestination = locations[Math.floor(Math.random()*locations.length-1)]
   }
   alert(`Hurry, ${playerDestination.character} needs honey. You are at ${playerLocation.character}'s House. \nTravel to Bees, pick up the honey, and take it to ${playerDestination.character}'s house!`)
}
function pickUp(){
   if(player["location"].character == "Bees"){
      player["honey"] = true
      alert(`You have reached Bees. \nPlease take the honey to ${playerDestination.character}'s house!`)
   }
}
function dropOff(){
   if(player["location"] == playerDestination){
      if(player["honey"] == false){
         alert(`You have reached ${playerDestination.character}'s house, but you don't have any honey!`)
         return null
      }
      player["honey"] = false
      alert(`You have reached ${playerDestination.character}'s house! Now, ${playerDestination.character} has honey!`)
      alert(`Thanks for Playing!!`)
   }
}

function move(movement) {
   if (movement.toLowerCase() == "q"){
      return null
   }
   if (typeof player["location"][movement.toLowerCase()] == "undefined") {
      alert("You may not go that way!")
   }
   else {
      player["location"] = player["location"][movement.toLowerCase()]
      alert(`You are now at ${player["location"].character}'s house!`)
      player["location"].greet()
   }
   pickUp()
   dropOff()
   playerMove = prompt("Which direction would you like to move? type 'Q' to quit")
   move(playerMove)
}

mission()
playerMove = prompt("Which direction would you like to move? type 'Q' to quit")
move(playerMove)