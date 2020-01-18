Cake = require('../models/cake.js')
console.log('***CONTOLLERS***')
module.exports = {
   index: (req, res) => {
      Cake.find()
         .then(cakes => { res.json({ cakes: cakes }) })
         .catch(err => { res.json(err) })
   },
   show: (req, res) => {
      cakeId = req.params.id
      Cake.findOne({ _id: cakeId })
         .then(Cake => { res.json(Cake) })
         .catch(err => { res.json(err) })
   },
   create: (req, res) => {
      newCake = req.body
      Cake.create(newCake)
         .then(cakeConfirm => { res.json(cakeConfirm) })
         .catch(err => { res.json(err) })
   },
}