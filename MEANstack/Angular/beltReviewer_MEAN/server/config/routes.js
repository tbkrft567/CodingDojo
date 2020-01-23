console.log('****ROUTES****')
const events = require('../controllers/events.js')
const comments = require('../controllers/comments.js')
const path = require('path')
module.exports = function(app){
   app.get('/app/events', (req, res) => {
      events.index(req, res)
   })
   app.post('/app/events/create', (req, res) => {
      console.log('****ROUTES****')
      events.create(req, res)
   })
   app.get('/users', (req, res) => {
      comments.index(req, res)
   })
   app.all("*", (req,res,next) => { 
      res.sendFile(path.resolve("./public/dist/public/index.html")) 
   })
}