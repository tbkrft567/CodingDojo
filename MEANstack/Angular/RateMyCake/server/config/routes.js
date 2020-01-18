cakes = require('../controllers/cakes.js')
reviews = require('../controllers/reviews.js')
console.log('***ROUTES***')

module.exports = function(app){
   app.get('/cakes', (req, res) =>{
      cakes.index(req, res)
   })
   app.get('/reviews', (req, res) =>{
      reviews.index(req, res)
   })
   app.get('/cakes/show/:id', (req, res) =>{
      cakes.show(req, res)
   })
   app.post('/cakes/create', (req, res) =>{
      cakes.create(req, res)
   })
   app.post('/reviews/create/:cakeId', (req, res) =>{
      reviews.create(req, res)
   })
}