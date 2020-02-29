console.log('****USER ROUTES****')
const users = require('../../controllers/Users.js')
module.exports = function (app) {
   app.get('/users/index', (req, res) => {
      users.index(req, res)
   })
   app.get('/users/show', (req, res) => {
      users.show(req, res)
   })
   app.post('/users/create', (req, res) => {
      users.create(req, res)
   })
   app.delete('/users/destroy', (req, res) => {
      users.destroy(req, res)
   })
   app.get('/users/edit', (req, res) => {
      users.edit(req, res)
   })
   app.put('/users/update', (req, res) => {
      users.update(req, res)
   })
}