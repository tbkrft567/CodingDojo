console.log('***MODELS***')
const mongoose = require('mongoose')
const ReviewSchema = new mongoose.Schema(
   {
      rating: Number, 
      comment: String
   })
// create an object that contains methods for mongoose to interface with MongoDB
const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review