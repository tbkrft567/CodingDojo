console.log('****MODELS****')
var mongoose = require('mongoose')
const AuthorSchema = new mongoose.Schema(
   {
      name: {type: String, required: true, minlength: 3},
      quotes: [{content: String, vote: Number}] //{quote: "", votes: 0}
   })
const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author

