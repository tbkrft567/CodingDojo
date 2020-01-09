const express = require('express')
      const app = express()
      // const session = require('express-session');
      const mongoose = require('mongoose') //Mongo Database

      mongoose.connect('mongodb://localhost/name_of_your_DB', { useNewUrlParser: true });
      const AnimalSchema = new mongoose.Schema(
         {
            id: Number, 
            name: String,
            age: Number, 
            role: String,
         })
      // create an object that contains methods for mongoose to interface with MongoDB
      const Animal = mongoose.model('Animal', AnimalSchema);

      app.set('view engine', 'ejs');
      app.set('views', __dirname + '/views');

      app.use(express.urlencoded({extended: true})) //Use POST Data
      app.use(express.static(__dirname + '/static')) //Use STATIC file
      // app.use(session({
      //    secret: 'keyboardkitteh',
      //    resave: false, 
      //    saveUninitialized: true,
      //    cookie: { maxAge: 60000 }
      // }))

      app.get('/', (req, res)=>{
         Animal.find().sort({_id:-1})
            .then(animals => {res.render('index', { animals })})
            .catch(err => res.json(err))
      })
      app.post('/destroy/:id', (req, res)=>{
         animalId = req.params.id
         console.log(animalId)
         Animal.remove({_id: animalId})
            .then(animal => {
               console.log(animal)
            })
         res.redirect('/')
      })
      app.get('/show/:id', (req, res)=>{
         animalId = req.params.id
         console.log(animalId)
         Animal.findOne({_id: animalId})
         .then(animal => {
            console.log(animal), res.render('show', { animal })
         })
      })
      app.get('/new', (req, res)=>{
         res.render('new')
      })
      app.post('/create', (req, res)=>{
         const animalData = req.body
         Animal.create(animalData)
            .then(newAnimal => { newAnimal })
            .catch(err => res.json(err))
         res.redirect('/')
      })
      app.get('/edit/:id', (req, res)=>{
         animalId = req.params.id
         console.log(animalId)
         Animal.findOne({_id: animalId})
         .then(animal => {
            console.log(animal+'\n***Edit***'), res.render('edit', { animal })
         })
      })
      //*****update!!*****/
      app.post('/update', (req, res)=>{
         const animalData = req.body
         Animal.updateOne({_id: animalData["_id"]}, {$set: { name: animalData["name"], age: animalData["age"], role: animalData["role"] }})
            .then( animal =>{console.log('***Updated***'), res.redirect('/')})
            .catch(err => json(err))
      })
      
            app.post('/test', (req, res)=>{
               res.send("page found")
            })

      app.get('/*', (req, res)=>{
         res.redirect('/')
      })
      
      app.listen(8000, () => console.log("listening on port 8000"));