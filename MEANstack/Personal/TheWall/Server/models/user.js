console.log('****USER MODELS****')
var mongoose = require('mongoose')
var Message = require('./message')
const UserSchema = new mongoose.Schema(
   {
      Name: {type: String, minlenght: 4},
      Messages: [Message.schema]
   })
const User = mongoose.model('User', UserSchema);
module.exports = User