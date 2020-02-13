console.log('****CONTROLLERS****')
var bcrypt = require('bcrypt')
var User = require('../model/user.js')
module.exports = {
   index: (req, res) => {
      //index - all Users
      User.find()
         .then(allUsers => {
            res.json({ users: allUsers })
         })
         .catch(err => { res.json(err) })
   },
   create: (req, res) => {
      console.log(req.body, '****')
      newUser = req.body
      userPassword = req.body.password
      userEmail = req.body.email
      userFirstName = req.body.first_name
      userLastName = req.body.last_name
      userBirthday = req.body.birthday
      User.find({ email: userEmail })
         .then(userFound => {
            if (userFound.length > 0) {
               return Promise.reject({ error: "User Email must be unique" })
            }
            else {
               bcrypt.hash(userPassword, 10)
                  .then(hashedPassword => {
                     newUser = { email: userEmail, first_name: userFirstName, last_name: userLastName, password: hashedPassword, birthday: userBirthday }
                     User.create(newUser)
                        .then(userConfirm => {
                           res.json(userConfirm)
                        })
                        .catch(err => { res.json(err) })
                  })
                  .catch(err => { res.json(err) })
            }
         })
         .catch(err => res.json(err))
   },
   show: (req, res) => {
      console.log('***CONTROLLERS-User-show***')
      req.session.userId = 1
      res.json(req.session.userId)
   },
}