const mongoose = require('mongoose')
console.log("***model***")
const AnimalSchema = new mongoose.Schema(
   {
      id: Number, 
      name: String,
      age: Number, 
      role: String,
   })

const Animal = mongoose.model('Animal', AnimalSchema);
const models ={class: AnimalSchema, model: Animal }
module.exports = models