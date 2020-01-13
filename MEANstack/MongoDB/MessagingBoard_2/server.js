const express = require('express')
const app = express()
// const session = require('express-session');
const mongoose = require('mongoose') //Mongo Database

mongoose.connect('mongodb://localhost/name_of_your_DB', { useNewUrlParser: true });

const CommentSchema = new mongoose.Schema(
   {
      name: String,
      comment: {type: String, require },
      date: {type: Date, default: Date.now}
   })
const MessageSchema = new mongoose.Schema(
   {
      name: String,
      message: {type: String, require},
      comments: [CommentSchema],
      date: {type: Date, default: Date.now}
   })
const MessageSchema = new mongoose.Schema(
   {
      name: String,
      message: {type: String, require},
      comments: [CommentSchema],
      date: {type: Date, default: Date.now}
   })
// create an object that contains methods for mongoose to interface with MongoDB
const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true})) //Use POST Data - rather than json
// app.use(express.json()); //Change Node server into an API that server JSON data (makes postData available in JSON-form)
app.use(express.static(__dirname + '/static')) //Use STATIC file
// app.use(session({
//    secret: 'keyboardkitteh',
//    resave: false, 
//    saveUninitialized: true,
//    cookie: { maxAge: 60000 }
// }))

app.get('/', (req, res) =>{
   Message.find().then( allMessages => { 
      console.log('***index***')
      res.render('index',{ allMessages }) })
   .catch(err => { console.log(err), res.json(err) })
})

app.post('/messages/create', (req, res) =>{
   console.log('***Message***')
   newMessage = req.body
   Message.create(newMessage)
      .then(messageConfirm => {res.redirect('/')})
      .catch(err => { res.json(err) })
   res.redirect('/')
})

app.post('/comments/create/:msgId', (req, res) =>{
   console.log('***Comment***')
   messageId = req.params.msgId
   // console.log(messageId)
   newComment = req.body
   Comment.create(newComment)
      .then(comment => { 
         Message.update({_id: messageId}, {$push: {comments: comment }})
            .then(res.redirect('/'))
            .catch(err => {res.json(err)})
      })
      .catch(err => {res.json(err)})
   })

app.listen(8000, () => console.log("listening on port 8000"));