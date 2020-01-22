console.log('****CONTROLLERS****')
var Product = require('../model/product.js')
module.exports = {
   index: (req, res) => {
      //index - all Products
      Product.find()
         .then(allProducts => {
            res.json({products: allProducts})
         })
         .catch(err => { res.json(err) })
   },
   create: (req, res) => {
      //index - all Products
      console.log(req.body)
      newProduct = req.body
      Product.create(newProduct)
         .then(product => {
            res.json(product)
         })
         .catch(err => { 
            console.log(err, '****************************'), res.json(err) })
   },
   show: (req, res) => {
      //index - all Products
      console.log(req.params)
      productId = req.params.productId
      Product.findOne({ _id: productId })
         .then(product => {
            res.json(product)
         })
         .catch(err => { 
            console.log(err, '****************************'), res.json(err) })
   },
   destroy: (req, res) => {
      //index - all Products
      productId = req.params.productId
      Product.remove({ _id: productId })
         .then(removeConfirm => {
            res.json(removeConfirm)
         })
         .catch(err => { 
            console.log(err, '****************************'), res.json(err) })
   },
   update: (req, res) => {
      //index - all Products
      console.log(req.body)
      productId = req.body._id
      productTitle = req.body.title
      productPrice = req.body.price
      productImageURL = req.body.imageURL
      Product.update({_id: productId}, {$set: {title: productTitle, price: productPrice, imageURL: productImageURL}}, { runValidators: true })
         .then(product => {
            res.json(product)
         })
         .catch(err => { 
            console.log(err, '****************************'), res.json(err) })
   },
   updateDisable: (req, res) => {
      //index - all Products
      console.log(req.body)
      productId = req.body.id
      if(req.body.disableOption){
         disableOption = false
      }
      else{
         disableOption = true
      }
      Product.update({_id: productId}, {$set: {disableOption: disableOption}})
         .then(product => {
            res.json(product)
         })
         .catch(err => { 
            console.log(err, '****************************'), res.json(err) })
   },
}