console.log('****USERS CONTROLLERS****')
var Message = require('./messages')
var User = require('../models/user')
module.exports = {
   index: (req, res) => {
      //index - all Users
      // User.find()
      //    .then(allUsers => {
      //       res.json({ users: allUsers })
      //    })
      //    .catch(err => { res.json(err) })
      console.log("User To Be Indexed")
   },
   show: (req, res) => {
      //index - all Users
      // User.find()
      //    .then(allUsers => {
      //       res.json({ users: allUsers })
      //    })
      //    .catch(err => { res.json(err) })
      console.log("User To Be Showed")
   },
   create: (req, res) => {
      // newUser = {Name: "Zach"}
      // User.create(newUser)
      //    .then(userConfirm => console.log(userConfirm))
      //    .catch(err => console.log(err))
      console.log("User To Be Created")
   },
   destroy: (req, res) => {
      // User.remove()
      //    .then(userConfirm => console.log(userConfirm))
      //    .catch(err => console.log(err))
      console.log("User To Be Destroyed")
   },
   edit: (req, res) => {
      // User.remove()
      //    .then(userConfirm => console.log(userConfirm))
      //    .catch(err => console.log(err))
      console.log("User To Be Edited")
   },
   update: (req, res) => {
      // User.remove()
      //    .then(userConfirm => console.log(userConfirm))
      //    .catch(err => console.log(err))
      console.log("User To Be Updated")
   },
}