Animal = require('../models/animal.js')
console.log("***controllers***")
module.exports = {
   index: (req, res)=>{
         Animal.find().sort({_id:-1})
            .then(animals => {res.render('index', { animals })})
            .catch(err => res.json(err))
         },
   destroy: (req, res)=>{
         animalId = req.params.id
         console.log(animalId)
         Animal.remove({_id: animalId})
            .then(animal => {
               console.log(animal)
            })
         res.redirect('/')
      },
   show: (req, res)=>{
         animalId = req.params.id
         console.log(animalId)
         Animal.findOne({_id: animalId})
         .then(animal => {
            console.log(animal), res.render('show', { animal })
         })
      },
   new: (req, res)=>{
         res.render('new')
      },
   create: (req, res)=>{
         const animalData = req.body
         Animal.create(animalData)
            .then(newAnimal => { newAnimal })
            .catch(err => res.json(err))
         res.redirect('/')
      },
   edit: (req, res)=>{
         animalId = req.params.id
         console.log(animalId)
         Animal.findOne({_id: animalId})
         .then(animal => {
            console.log(animal+'\n***Edit***'), res.render('edit', { animal })
         })
      },
   update: (req, res)=>{
         const animalData = req.body
         Animal.updateOne({_id: animalData["_id"]}, {$set: { name: animalData["name"], age: animalData["age"], role: animalData["role"] }})
            .then( animal =>{console.log('***Updated***'), res.redirect('/')})
            .catch(err => json(err))
      },
   catchAll: (req, res)=>{
         res.redirect('/')
      },
}