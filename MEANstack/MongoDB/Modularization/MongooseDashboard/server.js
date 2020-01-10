console.log("***server***")
const express = require('express')
const app = express()
const mongoose = require('./server/config/mongoose.js') //Mongo Database
// const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

app.use(express.urlencoded({ extended: true })) //Use POST Data
app.use(express.static(__dirname + '/static')) //Use STATIC file

require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));