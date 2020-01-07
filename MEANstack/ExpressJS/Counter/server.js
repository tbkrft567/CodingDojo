const express = require('express')
const app = express()
const session = require('express-session');

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')


app.use(express.static(__dirname + '/static'))
app.use(session({
   secret: 'keyboardkitteh',
   resave: false,
   saveUninitialized: true,
   cookie: { maxAge: 60000 }
}))


app.get('/', (req, res)=>{
   if(typeof req.session.countVariable == "undefined"){
      req.session.countVariable = 1
   }
   else{
      req.session.countVariable++
   }
   res.render("index", {session: req.session})
})

app.post('/create', (req, res)=>{
   req.session.countVariable++
   res.redirect('/')
})

app.post('/destroy', (req, res)=>{
   req.session.destroy()
   res.redirect('/')
})

app.listen(8000, ()=> console.log("listening for port 8000"))