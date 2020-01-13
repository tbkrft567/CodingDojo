const express = require('express')
const app = express()
const mongoose = require('mongoose') //Mongo Database

mongoose.connect('mongodb://localhost/books', { useNewUrlParser: true });
const TaskSchema = new mongoose.Schema(
   {
      title: String,
      description: { type: String, default: "" },
      completed: { type: Boolean, default: false },
      created_at: { type: Date, default: Date.now },
      update_at: { type: Date, default: Date.now },
   })
// create an object that contains methods for mongoose to interface with MongoDB
const Task = mongoose.model('Task', TaskSchema);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true })) //Use POST Data - rather than json
app.use(express.json()); //Change Node server into an API that server JSON data (makes postData available in JSON-form)
app.use(express.static(__dirname + '/static')) //Use STATIC file

app.get('/tasks', (req, res) => {
   //index - all Tasks
   Task.find()
      .then(allTasks => {
         res.json(allTasks)
      })
      .catch(err => { res.json(err) })
})
app.get('/tasks/show/:id', (req, res) => {
   //show - show 1 Tasks
   console.log(req.params.id)
   taskCondition = { _id: req.params.id }
   // console.log(taskCondition)
   Task.findOne(taskCondition)
      .then(showTask => {
         res.json(showTask)
      })
      .catch(err => { res.json(err) })
})
app.post('/tasks/create', (req, res) => {
   //create - create a task
   taskInput = req.body
   console.log(taskInput)
   Task.create(taskInput)
      .then(taskConfirm => {
         res.redirect('/tasks')
      })
      .catch(err => { res.json(err) })
})
app.put('/tasks/update', (req, res) => {
   //update - update a task
   taskCondition = { _id: req.body.id }
   Task.update(taskCondition, { $set: { title: req.body.title, description: req.body.description, completed: req.body.completed } })
      .then(taskConfirm => {  res.redirect('/tasks') })
      .catch(err => {  res.json(err) })
})
app.delete('/tasks/destroy/:id', (req, res) => {
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
})

app.listen(8000, () => console.log("listening on port 8000"));

