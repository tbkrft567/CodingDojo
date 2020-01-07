const express = require("express");
const app = express()
const session = require('express-session');

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')
app.use(express.urlencoded({extended: true})) //Use POST Data
app.use(express.static(__dirname + '/static')) //Use STATIC file
app.use(session({
   secret: 'keyboardkitteh',
   resave: false, 
   saveUninitialized: true,
   cookie: { maxAge: 60000 }
}))

app.get('/', (req, res)=>{
   res.render("new")
})

app.post('/create', (req, res)=>{
   req.session.submission = req.body
   res.redirect('/result')
})

app.get('/result', (req, res)=>{
   console.log(req.session)
   res.render("result",{session: req.session})
})

app.listen(8000, ()=> console.log("listening for port 8000"))
