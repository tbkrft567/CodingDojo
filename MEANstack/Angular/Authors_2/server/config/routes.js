console.log('****ROUTES****')
const authors = require('../controllers/Authors.js')
const quotes = require('../controllers/quotes.js')
const path = require('path')

module.exports = function (app) {
   app.get('/authors', (req, res) => {
      console.log('***ROUTES-index***')
      authors.index(req, res)
   })
   app.post('/authors/create', (req, res) => {
      console.log('***ROUTES-create***')
      authors.create(req, res)
   })
   app.get('/authors/:authorId/edit', (req, res) => {
      console.log('***ROUTES-edit***')
      authors.edit(req, res)
   })
   app.put('/authors/:authorId/update', (req, res) => {
      console.log('***ROUTES-update***')
      authors.update(req, res)
   })
   app.delete('/authors/:authorId/destroy', (req, res) => {
      console.log('***ROUTES-destroy***')
      authors.destroy(req, res)
   })
   app.post('/authors/:authorId/quotes/create', (req, res) => {
      console.log('***ROUTES_QUOTES-create***')
      quotes.create(req, res)
   })
   app.get('/quotes/:authorsId', (req, res) => {
      console.log('***ROUTES_QUOTES-index***')
      quotes.index(req, res)
   })
   app.delete('/authors/:authorsId/quotes/:quoteId/destroy', (req, res) => {
      console.log('***ROUTES_QUOTES-destroy***')
      quotes.destroy(req, res)
   })
   app.post('/authors/:authorsId/quotes/vote', (req, res) => {
      console.log('***ROUTES_QUOTES-vote***')
      quotes.vote(req, res)
   })
   app.all("*", (req, res, next) => {
      console.log('***ROUTES-CatchAll***')
      res.sendFile(path.resolve("./public/dist/public/index.html"))
   });

}