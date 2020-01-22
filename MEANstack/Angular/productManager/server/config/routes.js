console.log('****ROUTES****')
const products = require('../controllers/Products.js')
const path = require('path')
module.exports = function (app) {
   app.get('/products/index', (req, res) => {
      products.index(req, res)
   })
   app.post('/products/create', (req, res) => {
      products.create(req, res)
   })
   app.get('/products/:productId/show', (req, res) => {
      products.show(req, res)
   })
   app.delete('/products/:productId/destroy', (req, res) => {
      products.destroy(req, res)
   })
   app.post('/products/update', (req, res) => {
      products.update(req, res)
   })
   app.post('/products/disable/update', (req, res) => {
      products.updateDisable(req, res)
   })
   

   
   app.all("*", (req, res, next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
   })
}