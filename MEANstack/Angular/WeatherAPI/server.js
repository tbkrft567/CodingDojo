console.log('***SERVER***')
const express = require('express')
const app = express()
app.use(express.json()); //Change Node server into an API that server JSON data (makes postData available in JSON-form)
app.use(express.static(__dirname + '/public/dist/public')) //Use STATIC file

const Task = require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));