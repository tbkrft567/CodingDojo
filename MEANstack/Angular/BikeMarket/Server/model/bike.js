console.log('***MODELS-bike***')
const mongoose = require('mongoose')
const BikeSchema = new mongoose.Schema(
   {
      title: String,
      imageURL: String,
      description: String, 
      price: Number,
      city: String,
      State: { type: String, enum: ['TX', 'AK'] },
   })
// create an object that contains methods for mongoose to interface with MongoDB
const Bike = mongoose.model('Bike', BikeSchema);
module.exports = Bike