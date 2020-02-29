console.log('****MESSAGE ROUTES****')
const messages = require('../../controllers/Messages.js')
module.exports = function(app){
   app.get('/messages/index', (req, res) => {
      messages.index(req, res)
   })
   app.post('/messages/create', (req, res) => {
      messages.create(req, res)
   })
   app.delete('/messages/destroy', (req, res) => {
      messages.destroy(req, res)
   })
}