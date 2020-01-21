console.log('****MODELS****')
var mongoose = require('mongoose')
const AuthorSchema = new mongoose.Schema(
   {
      name: {type: String, minlength: 3},
      quotes: [] //{quotes: "", votes: 0}
   })
const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author