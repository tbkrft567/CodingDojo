console.log("***SERVER***");
const express = require('express');
const app = express();
const mongoose = require('./Server/config/mongoose.js');

app.use(express.json()); //Use JSON data
app.use(express.static(__dirname + '/public/dist/public')); //Use STATIC files
// app.use('trust proxy', 1); //[FOR LOGIN]

const user = require('./Server/config/routes/userRoutes')(app); //CREATE ROUTE CONNECTION
const session = require('./Server/config/routes/sessionRoutes')(app); //CREATE ROUTE CONNECTION
const message = require('./Server/config/routes/messageRoutes')(app); //CREATE ROUTE CONNECTION

app.listen(8000, () => console.log("listening on port 8000"));

