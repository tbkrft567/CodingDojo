console.log('****EVENT_MODELS****')
var mongoose = require('mongoose')
const Comment = require("./comment.js")
const Guest = require("./guest.js")
const EventSchema = new mongoose.Schema(
   {
      name: {type: String, required: true, minlength: 5, maxlength: 50}, 
      date: {type: Date, require: true},
      location: {type: String, require: true, minlength: 2},
      state: {type: String, require: true},
      host: {type: String, require: true, minlength: 2},
      comment: [Comment.schema],
      guests: [Guest.schema]
   })
const Event = mongoose.model('Event', EventSchema);
module.exports = Event
