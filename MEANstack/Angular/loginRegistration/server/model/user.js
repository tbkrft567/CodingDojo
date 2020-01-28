console.log('****MODELS****')
var mongoose = require('mongoose')
//var uniqueValidator = require('mongoose-unique-validator')
const UserSchema = new mongoose.Schema(
   {
      email: {type: String, required: true, unique: true, match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/},
      first_name: {type: String, required: true},
      last_name: {type: String, required: true},
      password: {type: String, required: true},
      birthday: {type: String},
   })
//UserSchema.plugin(uniqueValidator, { message: "This item must be UNIQUE*/*/*/*/*/" })
const User = mongoose.model('User', UserSchema);
module.exports = User