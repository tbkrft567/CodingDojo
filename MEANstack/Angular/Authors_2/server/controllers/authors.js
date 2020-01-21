console.log('****CONTROLLERS****')
var Author = require('../model/author.js')
module.exports = {
   index: (req, res) => {
      console.log('***CONTROLLER_AUTHOR-index***')
      //index - all Authors
      Author.find()
      .then(allAuthors => {
         res.json({authors: allAuthors})
      })
      .catch(err => { res.json(err) })
   },
   edit: (req, res) => {
      console.log('***CONTROLLER_AUTHOR-edit***')
      //index - all Authors
      authorId = req.params.authorId
      Author.findOne({_id: authorId})
         .then(author => {
            res.json(author)
         })
         .catch(err => { res.json(err) })
   },
   update: (req, res) => {
      console.log('***CONTROLLER_AUTHOR-update***')
      authorId = req.params.authorId
      authorName = req.body.name
      Author.update({_id: authorId}, {$set: {name: authorName}})
         .then(authorConfirm => {
            res.json(authorConfirm)
         })
         .catch(err => res.json(err))
   },
   create: (req, res) => {
      console.log('***CONTROLLER_AUTHOR-create***')
      //index - all Authors
      newAuthor = req.body
      Author.create(req.body)
      .then(authorConfirm => {
         res.json(authorConfirm)
      })
      .catch(err => { res.json({Errors: err}) })
   },
   destroy: (req, res) => {
      console.log('***CONTROLLER_AUTHOR-delete***')
      //index - all Authors
      authorId = req.params.authorId
      Author.remove({_id: authorId})
      .then(authorConfirm => {
         console.log(authorConfirm, '**authorConfirm**')
      })
      .catch(err => res.json(err))
   },
}

// {
//    name: MongooseError [ValidatorError]: Path `name` is required.
//   {
//      message: 'Path `name` is required.',
//      name: 'ValidatorError',
//      properties: {
//        validator: [Function],
//        message: 'Path `name` is required.',
//        type: 'required',
//        path: 'name',
//        value: ''
//      },
//      kind: 'required',
//      path: 'name',
//      value: '',
//      reason: undefined,
//      [Symbol(mongoose:validatorError)]: true
//    }
//  }