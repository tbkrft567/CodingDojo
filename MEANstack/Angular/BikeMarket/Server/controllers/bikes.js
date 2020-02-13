console.log('****CONTROLLERS-Bikes****')
Bike = require('../model/Bike.js')
User = require('../model/User.js')
module.exports = {
   index: (req, res) => {
      Bike.find()
         .then(Bikes => { res.json({ bikes: Bikes }) })
         .catch(err => { res.json(err) })
   },
   currentUserIndex: (req, res) => {
      userId = req.userData.userId
      User.findOne({ _id: userId })
         .then(currentUser => {
            res.json({ user: currentUser })
         })
         .catch(err => res.json({ errors: err }))
   },
   create: (req, res) => {
      // User.update({}, {$set: {bikes: []}})
      // .then(Bikes => { res.json("All Bikes") })
      // .catch(err => { res.json(err) })

      newBike = req.body
      userId = req.userData.userId
      Bike.create(newBike)
         .then(newBike => {
            User.update({ _id: userId }, { $push: { bikes: newBike } })
               .then(updateConfirm => { console.log('*******'), res.json("Bike Created") })
               .catch(err => { res.json(err) })})
         .catch(err => { res.json(err) })
   },
   destroy: (req, res) => {
      bikeId = req.params.bikeId
      userId = req.userData.userId
      console.log(bikeId, userId)
      User.findOne({ _id: userId })
         .then(User => console.log(user))
         .catch(err => res.json(err) )
   }
}