console.log('***MODELS***')
const mongoose = require('mongoose')
const Review = require('./review')
const CakeSchema = new mongoose.Schema(
   {
      name: String,
      imageURL: String,
      description: String, 
      Reviews: [Review.schema],
   })
// create an object that contains methods for mongoose to interface with MongoDB
const Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake