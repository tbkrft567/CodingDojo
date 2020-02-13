console.log('***MODELS-User***')
const mongoose = require('mongoose')
const Bike = require('./Bike')
const UserSchema = new mongoose.Schema(
   {
      firstName: String,
      lastName: String,
      email: String, 
      password: String,
      bikes: [Bike.schema]
   })
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);
module.exports = User