animals = require('../controllers/animals.js')
console.log("***routes***")

module.exports = function (app) {
   app.get('/', (req, res) => {
      animals.index(req, res);
   })
   app.post('/destroy/:id', (req, res) => {
      animals.destroy(req, res);
   })
   app.get('/show/:id', (req, res) => {
      animals.show(req, res);
   })
   app.get('/new', (req, res) => {
      animals.new(req, res);
   })
   app.post('/create', (req, res) => {
      animals.create(req, res);
   })
   app.get('/edit/:id', (req, res) => {
      animals.edit(req, res);
   })
   app.post('/update', (req, res) => {
      animals.update(req, res);
   })
   app.get('/*', (req, res) => {
      animals.catchAll(req, res);
   })
}