console.log('****COMMENT_MODELS****')
var mongoose = require('mongoose')
const CommentSchema = new mongoose.Schema(
   {
      name: {type: String, required: true, minlength: 2, maxlength: 50},
      content: {type: String, required: true, minlength: 10}
   })
const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment
