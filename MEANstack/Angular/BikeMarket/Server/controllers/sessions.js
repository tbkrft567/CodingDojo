console.log('****CONTROLLERS-Sessions****')
User = require('../model/User.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = {
   create: (req, res) => {
      userEmail = req.body.email
      userPassword = req.body.password
      User.findOne({ email: userEmail })
         .then(user => {
            console.log(user)
            bcrypt.compare(userPassword, user.password)
               .then(result => {
                  if (result) {
                     const SECRET = process.env.JWT_KEY
                     const USERINFO = { email: user.email, userId: user._id }
                     const token = jwt.sign(USERINFO, SECRET, { expiresIn: '1h' })
                     console.log(token)
                     res.json({ message: "Authentication Successful", token: token })
                  }
                  else {
                     res.json({ error: "Authentication Failed" })
                  }
               })
               .catch(err => res.json({ errors: err }))
         })
         .catch(err => res.json({ errors: err }))
   },
}