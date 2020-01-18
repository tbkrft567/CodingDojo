Review = require('../models/review.js')
Cake = require('../models/cake.js')
console.log('***CONTOLLERS***')
module.exports = {
   index: (req, res) => {
      Review.find()
      .then(reviews => { res.json({ reviews: reviews }) })
      .catch(err => { res.json(err) })
   },
   create: (req, res) => {
      newReview = req.body
      cakeId = req.params.cakeId
      Review.create(newReview)
         .then(newReview => {
            Cake.update({ _id: cakeId }, { $push: { reviews: newReview } })
               .then(updateConfirm => { console.log(updateConfirm), res.json(updateConfirm) })
               .catch(err => { res.json(err) })})
         .catch(err => { res.json(err) })
   },
}