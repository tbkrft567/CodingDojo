console.log('****MONGOOSE****')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/authors', { useNewUrlParser: true });