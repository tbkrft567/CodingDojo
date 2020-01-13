console.log('****CONTROLLERS****')

var Task = require('../model/Task.js')

module.exports = {
   index: (req, res) => {
      //index - all Tasks
      console.log("Here we are!")
      Task.find()
         .then(allTasks => {
            res.json(allTasks)
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
      console.log(taskInput)
      Task.create(taskInput)
         .then(taskConfirm => {
            res.redirect('/tasks')
         })
         .catch(err => { res.json(err) })
   },
   update: (req, res) => {
      //update - update a task
      taskCondition = { _id: req.body.id }
      Task.update(taskCondition, { $set: { title: req.body.title, description: req.body.description, completed: req.body.completed } })
         .then(taskConfirm => {  res.redirect('/tasks') })
         .catch(err => {  res.json(err) })
   },
   delete: (req, res) => {
      //delete - delete a task
      taskCondition = { _id: req.params.id }
      Task.findOne(taskCondition)
         .then(taskRemove => { 
            Task.remove(taskRemove)
               .then(taskConfirm => { 
                  res.redirect('/tasks')
               })
               .catch(err => { res.json(err) })
         })
         .catch(err => { res.json(err) })
   }
}