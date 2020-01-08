const express = require('express')
const app = express()
// const session = require('express-session');
const mongoose = require('mongoose') //Mongo Database

mongoose.connect('mongodb://localhost/name_of_your_DB', { useNewUrlParser: true });
const QuoteSchema = new mongoose.Schema(
   {
      name: String,
      quote: String
   })
// create an object that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true })) //Use POST Data
app.use(express.static(__dirname + '/static')) //Use STATIC file
// app.use(session({
//    secret: 'keyboardkitteh',
//    resave: false, 
//    saveUninitialized: true,
//    cookie: { maxAge: 60000 }
// }))

// app.get('/', (req, res)=>{
//    res.render('quotes_index')
// })

app.get('/quotes', (req, res) => {
   Quote.find()
      .then(quote => { console.log(quote), res.render('quotes/index', { quote }) })
      .catch(err => res.json(err))
})

app.get('/quotes/new', (req, res) => {
   res.render('quotes/new')
})

app.post('/quotes/create', (req, res) => {
   const quoteData = req.body;
   Quote.create(quoteData)
      .then(newQuote => { newQuote, console.log('user created ', newQuote) })
      .catch(err => res.json(err))
   res.redirect('/quotes')
})

app.listen(8000, () => console.log("listening on port 8000"));