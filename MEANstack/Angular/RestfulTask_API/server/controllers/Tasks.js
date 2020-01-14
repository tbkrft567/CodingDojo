console.log('****CONTROLLERS****')

var Task = require('../model/Task.js')

module.exports = {
   index: (req, res) => {
      //index - all Tasks
      Task.find()
         .then(allTasks => {
            res.json({tasks: allTasks})
         })
         .catch(err => { res.json(err) })
   },
   show: (req, res) => {
      //show - show 1 Tasks
      console.log(req.params.id)
      taskCondition = { _id: req.params.id }
      // console.log(taskCondition)
      Task.findOne(taskCondition)
         .then(showTask => {
            res.json(showTask)
         })
         .catch(err => { res.json(err) })
   },
   create: (req, res) => {
      //create - create a task
      taskInput = req.body
      Task.create(taskInput)
         .then(taskConfirm => {
            res.json(taskConfirm)
         })
         .catch(err => { res.json(err) })
   },
   update: (req, res) => {
      //update - update a task
      console.log('**UPDATE-controller**')
      taskCondition = { _id: req.body._id }
      Task.update(taskCondition, { $set: { title: req.body.title, description: req.body.description, completed: req.body.completed } })
         .then(taskConfirm => { console.log(taskConfirm), res.json(taskConfirm) })
         .catch(err => {  res.json(err) })
   },
   delete: (req, res) => {
      //delete - delete a task
      taskCondition = { _id: req.params.id }
      Task.findOne(taskCondition)
         .then(taskRemove => { 
            Task.remove(taskRemove)
               .then(taskConfirm => {
                  console.log('**DELETE-controller**') 
                  // res.redirect('/tasks')
               })
               .catch(err => { res.json(err) })
         })
         .catch(err => { res.json(err) })
   }
}