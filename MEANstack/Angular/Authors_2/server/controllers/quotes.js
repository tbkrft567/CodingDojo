console.log('****CONTROLLERS****')
var Author = require('../model/author.js')
module.exports = {
   index: (req, res) => {
      console.log('***CONTROLLER_QUOTES-index***')
      //index - all Users
      authorId = req.params.authorsId
      Author.findOne({ _id: authorId })
         .then(author => {
            res.json(author)
         })
         .catch(err => { res.json(err) })
   },
   create: (req, res) => {
      console.log('***CONTROLLER_QUOTES-create***')
      //index - all Users
      authorId = req.params.authorId
      newQuote = { content: req.body.key.content, vote: 0 }
      Author.update({ _id: authorId }, { $push: { quotes: newQuote } })
         .then(author => {
            res.json(author)
         })
         .catch(err => { res.json(err) })
   },
   destroy: (req, res) => {
      console.log('***CONTROLLER_QUOTES-destroy***')
      authorId = req.params.authorsId
      quoteId = req.params.quoteId
      // console.log(authorId, quoteId)
      Author.findOne({ _id: authorId })
         .then(author => {
            quotes = author.quotes
            for (i = 0; i < quotes.length; i++) {
               if (quotes[i]["_id"] == quoteId) {
                  Author.update({ _id: authorId }, { $pull: { quotes: quotes[i] } })
                     .then(quoteConfirm => { res.json(quoteConfirm) })
                     .catch(err => { res.json(err) })
               }
            }
         })
         .catch(err => { res.json(err) })
   },
   vote: (req, res) => {
      console.log('***CONTROLLER_QUOTES-vote***')
      authorId = req.body.authorId
      quoteId = req.body.quoteId
      voteOption = req.body.vote
      Author.findOne({ _id: authorId })
         .then(authorFind => {
            if (voteOption == 1) {
               for (i = 0; i < authorFind["quotes"].length; i++) {
                  if (authorFind["quotes"][i]["_id"] == quoteId) {
                     authorFind["quotes"][i]["vote"]++
                     break;
                  }
               }
            }
            else if (voteOption == 0) {
               for (i = 0; i < authorFind["quotes"].length; i++) {
                  if (authorFind["quotes"][i]["_id"] == quoteId) {
                     authorFind["quotes"][i]["vote"]--
                     break;
                  }
               }
            }
            authorFind.save()
               .then(saveConfirm => { res.json(saveConfirm) })
               .catch(err => res.json(err))

         })
         .catch(err => { res.json({ errors: err }) })
   }
}