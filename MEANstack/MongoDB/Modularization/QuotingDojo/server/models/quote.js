// Quote = mongoose.model('Quote')
const mongoose = require('mongoose')
const QuoteSchema = new mongoose.Schema(
   {
      name: String,
      quote: String
   })
// create an object that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote   
