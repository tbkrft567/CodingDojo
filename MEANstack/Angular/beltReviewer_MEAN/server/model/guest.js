console.log('****GUEST_MODELS****')
var mongoose = require('mongoose')
const GuestSchema = new mongoose.Schema(
   {
      name: {type: String, required: true, minlength: 5, maxlength: 50}, 
      location: {type: String, require: true, minlength: 2},
      state: {type: String, require: true},
   })
const Guest = mongoose.model('Guest', GuestSchema);
module.exports = Guest
