console.log('****COMMENTS_CONTROLLERS****')
var Comment = require('../model/comment.js')
module.exports = {
index: (req, res) => {
   //index - all Comments
   Comment.find()
      .then(allComments => {
         res.json({comments: allComments})
      })
      .catch(err => { res.json(err) })
},
}