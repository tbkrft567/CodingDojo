const express = require('express')
const app = express()
const session = require('express-session');
const mongoose = require('mongoose') //Mongo Database

mongoose.connect('mongodb://localhost/name_of_your_DB', { useNewUrlParser: true });
const PostSchema = new mongoose.Schema(
   {
      title: {type: String, require: [true, "Post must have a title"], maxlength: 50}
,      content: {type: String, require: [true, "Post must have content"]}
   })
const BlogSchema = new mongoose.Schema(
   {
      title: {type: String, require: [true, "Blog must have a title"], maxlength: 50},
      content: { type: String, require: [true, "Blog must have a content"]},
      posts: [PostSchema]
   })
const UserSchema = new mongoose.Schema(
   {
      name: {type: String, require: [true, "User must have a name"], maxlength: 50},
      blogs: [BlogSchema]
   })
   // create an object that contains methods for mongoose to interface with MongoDB
   const Post = mongoose.model('Post', PostSchema);
   const Blog = mongoose.model('Blog', BlogSchema);
   const User = mongoose.model('User', UserSchema);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true})) //Use POST Data
app.use(express.static(__dirname + '/static')) //Use STATIC file
app.use(session({
   secret: 'keyboardkitteh',
   resave: false, 
   saveUninitialized: true,
   cookie: { maxAge: 60000 }
}))

app.get('/', (req, res)=>{
   // User.remove()
   //    .then(user => {console.log(user)})
   // req.session.user = {name:"duh"}
   // Blog.remove()
   //    .then(blog => console.log(blog), res.render('index', {session: req.session} ))

   User.find()
      .then(users => { res.render('index', {session: req.session, users}) })
      .catch(err => res.json(err))
   // Blog.find()
   //    .then( blogs => { console.log(blogs), res.render('index',  {session: req.session, blogs}) })
   //    .catch(err => res.json(err))
   // res.render('index', {session: req.session})
})

app.post('/blogs/create', (req, res)=>{
   console.log('*****Blog****')
   blogData_req = req.body
   userData = req.session.user
   // console.log(userData)
   // User.findOne({_id: userData._id})
   //    .then(user => {console.log('here')})
   //    .catch(err => res.json(err))
   Blog.create(blogData_req, function(err, blogData){
      if(err){
         res.json(err)
      }
      else {
         User.findOneAndUpdate({_id: userData._id}, {$push: {blogs: blogData }}, function(err, userData){
            if(err){
               res.json(err)
            }
            else {
               res.redirect('/')
            }
         })
      }
   })
   // Blog.create(blogData_req)
   //    .then(blog => { console.log(blog), 
   //       User.findOne({_id: userData._id})
   //          .then(user => {console.log(user)})
   //          .catch(err => res.json(err))
   //    })
         // User.findOne({_id: userData._id})
         //    .then(user=>{ 
            //    User.blogs.push(blog)
            //    .then( user => { res.redirect('/') })
            //    .catch(err =>  res.json(err)) })})
            // .catch(err =>  res.json(err))
   //    .catch(err =>  res.json(err))
   // res.redirect('/')
})

app.post('/posts/create', (req, res)=>{
   console.log('*****Post****')
   postData = req.body
   Post.create(postData, function(err, blogData){
      if(err){
         res.json(err)
      }
      else {
         console.log(postData)
         Blog.findOneAndUpdate({_id: postData.Blog_id}, {$push: {posts: postData }}, console.log(postData.Blog_id),function(err, blogData){
            if(err){
               res.json(err)
            }
            else {
               console.log(blogData)
               res.redirect('/')
            }
         })
      }
   })
})

// *Login and Registration
app.post('/users/create', (req, res)=>{
   console.log('*****User****')
   const userData = req.body
   User.create(userData)
      .then(user => { console.log(user) , res.redirect('/') })
      .catch(err => res.json(err))
})
app.post('/sessions/create', (req, res)=>{
   console.log('*****User****')
   const userData = req.body
   User.findOne({name: userData["name"]})
      .then(user => { console.log(user); req.session.user = user, res.redirect('/') })
      .catch(err => res.json(err))
})
app.get('/sessions/destroy', (req, res)=>{
   req.session.destroy()
   res.redirect('/')
})

app.listen(8000, () => console.log("listening on port 8000"));