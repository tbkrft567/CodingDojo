console.log('****ROUTES****')
const authors = require('../controllers/authors.js')
module.exports = function (app) {
   app.get('/authors', (req, res) => {
      authors.index(req, res)
   })
   app.get('/authors/show/:id', (req, res) => {
      authors.show(req, res)
   })
   app.post('/authors/update', (req, res) => {
      authors.update(req, res)
   })
   app.post('/authors/create', (req, res) => {
      authors.create(req, res)
   })
   app.delete('/authors/destroy/:id', (req, res) => {
      authors.destroy(req, res)
   })
}