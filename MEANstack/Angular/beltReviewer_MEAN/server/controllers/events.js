console.log('****EVENTS_CONTROLLERS****')
var Event = require('../model/event.js')
module.exports = {
   index: (req, res) => {
      //index - all Events
      Event.find()
         .then(allEvents => {
            res.json({ events: allEvents })
         })
         .catch(err => { res.json(err) })
   },
   create: (req, res) => {
      //index - all Events
      eventName = req.body.name
      newEvent = req.body
      Event.find({ name: eventName })
         .then(eventsFound => { 
            console.log('**Find One**')
            if(eventsFound.length > 0){
               return Promise.reject('Your item is not unique')
            }
            else{
               return Event.create(req.body)
            }
         })
         .then(eventConfirm => { res.json(eventConfirm) })
         .catch(err => { res.json(err) })
   }
}
