console.log('****MESSAGE MODELS****')
var mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema(
   {
      content: String, 
      date: Date
   })
const Message = mongoose.model('Message', MessageSchema);
module.exports = Message