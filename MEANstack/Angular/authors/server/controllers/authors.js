console.log('****CONTROLLERS****')
var Author = require('../model/author.js')
module.exports = {
   index: (req, res) => {
      //index - all Authors
      Author.find()
         .then(allAuthors => {
            res.json({ authors: allAuthors }) })
         .catch(err => { res.json(err) })
   },
   show: (req, res) => {
      //index - all Authors
      authorId = req.params.id
      Author.findOne({_id: authorId})
         .then(author => {
            res.json(author) })
         .catch(err => { res.json(err) })
   },
   create: (req, res) => {
      newAuthor = req.body
      Author.create(newAuthor)
         .then(authorConfirm => { 
            res.json(authorConfirm) })
         .catch(err => { res.json(err) })

   },
   update: (req, res) => {
      author = req.body
      Author.update({ _id: author._id }, { $set: { name: author.name } })
         .then(authorConfirm => { 
            res.json(console.log(authorConfirm)) })
         .catch(err => { res.json(err) })
   },
   destroy: (req, res) => {
      authorId = req.params.id
      Author.remove({ _id: authorId })
         .then(authorConfirm => { 
            res.json(authorConfirm) })
         .catch(err => { res.json(err) })
   },
}