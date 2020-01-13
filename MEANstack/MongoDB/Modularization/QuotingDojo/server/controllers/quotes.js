console.log('****CONTROLLER****')
Quote = require('../models/quote.js')
   // console.log(Quote)
module.exports = {
   index: (req, res) => {
      Quote.find()
         .then(quote => { console.log(quote), res.render('quotes/index', { quote }) })
         .catch(err => res.json(err))
   },
   new: (req, res) => {
      res.render('quotes/new')
   },
   create: (req, res) => {
      const quoteData = req.body;
      Quote.create(quoteData)
         .then(newQuote => { newQuote, console.log('user created ', newQuote) })
         .catch(err => res.json(err))
      res.redirect('/quotes')
   }
}