console.log('***SERVER***')
const express = require('express')
const app = express()
const session = require('express-session');
const mongoose = require('./server/config/mongoose.js')

app.use(express.json()); //Change Node server into an API that server JSON data (makes postData available in JSON-form)
app.use(express.static(__dirname + '/public/dist/public')) //Use STATIC file
app.set('trust proxy', 1)
app.use(session({
   secret: 'keyboardkitteh',
   resave: false, 
   saveUninitialized: true,
   cookie: { maxAge: 60000 }
}))


const Task = require('./server/config/routes.js')(app) //CREATE ROUTE FILE

app.listen(8000, () => console.log("listening on port 8000"));