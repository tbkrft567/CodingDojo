const express = require('express')
const app = express()
// const session = require('express-session');
const mongoose = require('mongoose') //Mongo Database

mongoose.connect('mongodb://localhost/API1955', { useNewUrlParser: true });
const UserSchema = new mongoose.Schema(
   {
      name: String,
   })
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//app.use(express.urlencoded({extended: true})) //Use POST Data - rather than json
app.use(express.json()); //Change Node server into an API that server JSON data (makes postData available in JSON-form)
console.log(express.json())
app.use(express.static(__dirname + '/static')) //Use STATIC file
// app.use(session({
//    secret: 'keyboardkitteh',
//    resave: false, 
//    saveUninitialized: true,
//    cookie: { maxAge: 60000 }
// }))

app.get('/', (req, res) => {
   User.find().then(data => { res.json(data) }).catch(err => { res.json(err) })
})
app.get('/new/:name', (req, res) => {
   newUser = { name: req.params.name }
   User.create(newUser).then(data => { 
      res.json({ "User Created": "" }) })
   .catch(err => { res.json(err) })
})
app.get('/remove/:name', (req, res) => {
   userConditions = req.params
   console.log(userConditions)
   User.findOne(userConditions).then(removeUser => { 
      User.remove(removeUser).then(removeConfirm => { 
         res.json(removeConfirm)})
      .catch(err => {res.redirect('/')}) })
   .catch(err => { res.json(err) })
})
app.get('/:name', (req, res) => {
   userConditions = { name: req.params.name }
   User.findOne(userConditions).then(showUser => { 
      res.json(showUser) })
   .catch(err => { res.json(err) })
})

app.listen(8000, () => console.log("listening on port 8000"));