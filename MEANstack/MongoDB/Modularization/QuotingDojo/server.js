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

require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));