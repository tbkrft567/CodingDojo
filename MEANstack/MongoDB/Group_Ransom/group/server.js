const express = require("express");
const app = express();
const mongoose = require('mongoose');
const server = app.listen(1000, () => console.log("listening on port 7000"));
const flash = require('express-flash');
app.use(flash());
const session = require('express-session');

app.use(session({
    secret: 'skippy',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

mongoose.connect('mongodb://localhost/hello_DB', {useNewUrlParser: true});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {res.render("index")});

app.get('/next', (req, res) => {res.render("next")});

app.get('/third', (req, res) => {res.render("third")});

app.get('/fourth', (req, res) => {res.render("fourth",{session:req.session.money})});

app.get('/fifth', (req, res) => {res.render("fifth",{session:req.session.money})});

app.post('/money', (req, res) => {
    money = req.body.money
    req.session.money = money
    ransom = 635000
    if (money<ransom) {
        res.redirect("/fifth")
    }
    else if (money>=ransom){
        res.redirect("/fourth")
    }
    });

