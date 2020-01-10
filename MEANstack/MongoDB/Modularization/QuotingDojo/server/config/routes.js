quotes = require('../controllers/quotes.js')
module.exports = function(app){
   app.get('/quotes', (req, res) => {
      quotes.index(req, res);
   })
   
   app.get('/quotes/new', (req, res) => {
      quotes.new(req,res);
   })
   
   app.post('/quotes/create', (req, res) => {
      quotes.create(req, res)
   })
}