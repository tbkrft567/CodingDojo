console.log('****CONTROLLERS-Users****')
User = require('../model/User.js')
bcrypt = require('bcrypt')
module.exports = {
   index: (req, res) => {
      User.find()
         .then(Users => { res.json({ Users: Users }) })
         .catch(err => { res.json(err) })
   },
   show: (req, res) => {
      userId = req.userData.userId
      User.findOne({ _id: userId })
         .then(User => { 
            userInfo = { _id: User._id, firstName: User.firstName, lastName: User.lastName, email: User.email }
            res.json(userInfo) })
         .catch(err => { res.json(err) })
   },
   create: (req, res) => {
      //// User.remove()
      ////    .then(x => console.log(res.json(x)))
      ////    .catch(y => console.log('err'))
      newUser = req.body
      newUser = { firstName: newUser.firstName, lastName: newUser.lastName, Email: newUser.email, Password: newUser.password }
      User.find({ email: newUser.Email })
         .then(usersFound => {
            if (usersFound.length == 0) {
               bcrypt.hash(req.body.password, 10)
                  .then(hashedPassword => {
                     newUser = ({ "firstName": newUser.firstName, "lastName": newUser.lastName, "email": newUser.Email, "password": hashedPassword })
                     User.create(newUser)
                        .then(userConfirm => {
                           res.json(userConfirm)
                        })
                        .catch(err => res.json({ errors: err }))
                  })
                  .catch(err => res.json({ errors: err }))
            }
            else {
               res.json('User Email Already Taken')
            }
         })
         .catch(err => { res.json(err) })
   },
   showMyBikes: (req, res) =>{
      currentUserId = req.userData.userId
      User.findOne({_id: currentUserId})
         .then(currentUser => {
            res.json(currentUser)
         })
   }
}