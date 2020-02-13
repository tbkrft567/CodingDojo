console.log('****ROUTES****')
Users = require('../controllers/users.js')
Bikes = require('../controllers/bikes.js')
Sessions = require('../controllers/sessions.js')
const path = require('Path')
const authUser = require('../middleware/authorizeUser')


module.exports = function (app) {
   app.post('/app/users/create', (req, res) =>{
      Users.create(req, res)
   })
   app.get('/app/users/show', authUser, (req, res) =>{
      Users.show(req, res)
   })
   app.post('/app/sessions/create', (req, res) => {
      Sessions.create(req, res)
   })
   app.get('/app/users/index', (req, res) => {
      Users.index(req, res)
   })
   app.get('/app/bikes/index', authUser, (req, res) =>{
      Bikes.index(req, res)
   })
   app.post('/app/bikes/create', authUser, (req, res) =>{
      Bikes.create(req, res)
   })
   app.get('/app/users/show/bikes/index', authUser, (req, res) =>{
      console.log("All My Bikes")
      Users.showMyBikes(req, res)
   })
   app.delete('/app/bikes/destroy/:bikeId', authUser, (req, res) =>{
      Bikes.destroy(req, res)
   })
   // app.get('/Users/show/:id', (req, res) =>{
   //    Users.show(req, res)
   // })
   // app.post('/bikes/create/:userId', (req, res) =>{
   //    Bikes.create(req, res)
   // })

   app.all("*", (req, res, next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
  })
}