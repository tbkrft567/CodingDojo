console.log('****ROUTES****')

const tasks = require('../controllers/Tasks.js')

module.exports = function(app){
   app.get('/tasks', (req, res) => {
      tasks.index(req, res)
   })
   app.get('/tasks/show/:id', (req, res) => {
      tasks.show(req, res)
   })
   app.post('/tasks/create', (req, res) => {
      tasks.create(req, res)
   })
   app.put('/tasks/update', (req, res) => {
      tasks.update(req, res)
   })
   app.delete('/tasks/destroy/:id', (req, res) => {
      task.delete(req, res)
   })
}