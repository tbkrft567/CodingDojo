
//This is ONLY for (EJS) embedded JavaScript files vs. html files
const express = require('express');
const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/static"))


app.get("/", (req, res) =>{
   res.sendFile(__dirname+'/views/index.html');
})
app.get("/cats", (req, res) =>{
   res.sendFile(__dirname+'/views/cats.html');
})
app.get("/cars", (req, res) =>{
   res.sendFile(__dirname+'/views/cars.html');
})
app.get("/form", (req, res) =>{
   res.sendFile(__dirname+'/views/form.html');
})


app.listen(8000, ()=> console.log("listening on port 8000"));


/*
//This is ONLY for (EJS) embedded JavaScript files vs. html files
const express = require('express');
const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/static"))


app.get("/", (req, res) =>{
   res.render('index');
})
app.get("/cats", (req, res) =>{
   res.render('cats');
})
app.get("/cars", (req, res) =>{
   res.render('cars');
})
app.get("/form", (req, res) =>{
   res.render('form');
})


app.listen(8000, ()=> console.log("listening on port 8000"));
*/