console.log('****MODELS****')

var mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema(
   {
      title: {type: String, required: "**Title**"},
      description: { type: String, default: "", required: "**Description**"},
      completed: { type: Boolean, default: false },
      created_at: { type: Date, default: Date.now },
      update_at: { type: Date, default: Date.now },
   })
// create an object that contains methods for mongoose to interface with MongoDB
const Task = mongoose.model('Task', TaskSchema);
module.exports = Task