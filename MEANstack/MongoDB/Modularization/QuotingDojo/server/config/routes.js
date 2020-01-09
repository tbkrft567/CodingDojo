
const mongoose = require('mongoose'),
   Quote = mongoose.model('Quote')
module.exports = function(app){
   app.get('/quotes', (req, res) => {
      Quote.find()
         .then(quote => { console.log(quote), res.render('quotes/index', { quote }) })
         .catch(err => res.json(err))
   })
   
   app.get('/quotes/new', (req, res) => {
      res.render('quotes/new')
   })
   
   app.post('/quotes/create', (req, res) => {
      const quoteData = req.body;
      Quote.create(quoteData)
         .then(newQuote => { newQuote, console.log('user created ', newQuote) })
         .catch(err => res.json(err))
      res.redirect('/quotes')
   })
}