const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/name_of_your_DB', { useNewUrlParser: true });
const UserSchema = new mongoose.Schema(
   {
      name: { type: String, require: true, minlength: 6 },
      age: { type: Number, require: true, max: 99 }
   })
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true })) //Use POST Data
app.use(express.static(__dirname + '/static')) //Use STATIC file

app.get('/', (req, res) => {
   User.find()
      .then(data => res.render('index', {users: data}))
      .then(err => res.json(err))
})

app.post('/users', (req, res) => {
   console.log(req.body)
   const user =  new User();
   user.name =  req.body.name;
   user.age = req.body.age;
   user.save()
      .then(newUserData => { newUserData, console.log('user created: ', newUserData) })
      .catch(err => console.log(err))
   res.redirect('/')
})

app.listen(8000, () => console.log("listening on port 8000"));