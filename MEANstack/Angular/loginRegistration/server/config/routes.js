console.log('****ROUTES****')

const users = require('../controllers/users.js')
const sessions = require('../controllers/sessions.js')
const path = require('path')
const authorizeUser = require('../middleware/authorizeUser.js')
module.exports = function (app) {
   app.get('/app/users', (req, res) => {
      users.index(req, res)
   })
   app.get('/app/users/index', authorizeUser, (req, res) => {
      console.log('***ROUTES-Users-show***')
      console.log(req.headers, '****HEADERS****')
      users.index(req, res)
   })
   app.post('/app/users/create', (req, res) => {
      users.create(req, res)
   })
   // app.post('/app/sessions/create', (req, res) => {
   //    console.log('***ROUTES-Session-create***')
   //    sessions.create(req, res)
   // })
   app.get('/app/sessions/destroy', (req, res) => {
      sessions.destroy(req, res)
   })

   app.post('/app/sessions/create', (req, res, next) => { //LOGIN
      sessions.create(req, res, next)
   })

   app.all("*", (req, res, next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
   })
}

