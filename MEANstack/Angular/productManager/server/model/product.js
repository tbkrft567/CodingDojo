console.log('****MODELS****')
var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
const ProductSchema = new mongoose.Schema(
   {
      title: {type: String, require: true, minlength: 4},
      price: {type: Number, require: true},
      imageURL: {type: String, require: true},
      disableOption: {type: Boolean, default: false}
   })

ProductSchema.plugin(uniqueValidator, { message: "This item must be UNIQUE*/*/*/*/*/" })
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product