console.log('****SESSION ROUTES****')
const sessions = require('../../controllers/Sessions.js')
module.exports = function(app){
   app.post('/sessions/create', (req, res) => {
      sessions.create(req, res)
   })
   app.delete('/sessions/destroy', (req, res) => {
      sessions.destroy(req, res)
   })
}