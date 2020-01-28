console.log('****CONTROLLERS****')
const jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
var User = require('../model/user.js')
module.exports = {

   create: (req, res) => {
      console.log(req.body)
      userEmail = req.body.email
      userPassword = req.body.password
      console.log('**USER LOGIN**')
      User.findOne({ email: userEmail })
         .then(user => {
            bcrypt.compare(userPassword, user.password) //(formPassword, DB_password)
               .then(result => {
                  const SECRET = process.env.JWT_KEY
                  var USERINFO = { email: user.email, userId: user._id }
                  const token = jwt.sign(USERINFO, SECRET, { expiresIn: '1h' })  //Stored on the client****
                  console.log(token)
                  res.json(
                     { message: "Authentication Successful", token: token }
                  )
               })
         })
         .catch(err => {
            res.json(
               console.log('***LOGIN FAILED***'),
               { errors: err })
         })
   },

   destroy: (req, res) => {
      // req.session.userId = 1
      console.log(req.session.userId)
      req.session.destroy()
      res.json(req.session)
   },
}