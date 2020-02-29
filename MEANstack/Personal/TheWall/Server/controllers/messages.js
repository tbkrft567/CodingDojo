console.log('****MESSAGES CONTROLLERS****')
var Message = require('../models/message')
module.exports = {
   index: (req, res) => {
      // //index - all Messages
      // Message.find()
      //    .then(allMessages => {
      //       res.json({ Messages: allMessages })
      //    })
      //    .catch(err => { res.json(err) })
      console.log("Message To Be Indexed")
   },
   create: (req, res) => {
      // newMessage = {content: "testText", date: Date.now()}
      // Message.create(newMessage)
      //    .then(messageConfirm => console.log(messageConfirm))
      //    .catch(err => console.log(err))
      console.log("Message To Be Created")
   },
   destroy: (req, res) => {
      // Message.remove()
      //    .then(messageConfirm => console.log(messageConfirm))
      //    .catch(err => console.log(err))
      console.log("Message To Be Destroyed")
   }
}