console.log('***SERVER***')
const express = require('express')
const app = express()
const mongoose = require('./server/config/mongoose') //Mongo Database

app.use(express.static(__dirname + '/public/dist/public'))
app.use(express.json()); //Change Node server into an API that server JSON data (makes postData available in JSON-form)

require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));