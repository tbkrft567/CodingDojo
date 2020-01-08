const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static'))

app.get('/cats/index', (req, res)=>{
   cats =[
      {master: true},
      {
         img: "/images/cat1.jpg",
         food: "spaghetti",
         age: 3,
         sleepSpots: ["under the bed", "in a sunbeam"],
         masterPage: true
      },
      {
         img: "/images/cat2.jpg",
         food: "pizza",
         age: 10,
         sleepSpots: ["under the bed", "in a sunbeam"]
      },
      {
         img: "/images/cat3.jpg",
         food: "hotdog",
         age: 5,
         sleepSpots: ["under the bed", "in a sunbeam"]
      }
   ]
   res.render('cats/index', {cats})
})

//How do I create one route to hand all photos!? route = '/cats"#"'
app.get('/cats/show/:id', (req, res)=>{
   selectedCat =req.params.id
   cats =[
      {master: false},
      {
         img: "/images/cat1.jpg",
         food: "spaghetti",
         age: 3,
         sleepSpots: ["under the bed", "in a sunbeam"],
         masterPage: true
      },
      {
         img: "/images/cat2.jpg",
         food: "pizza",
         age: 10,
         sleepSpots: ["under the bed", "in a sunbeam"]
      },
      {
         img: "/images/cat3.jpg",
         food: "hotdog",
         age: 5,
         sleepSpots: ["under the bed", "in a sunbeam"]
      }
   ]
   cats = [
      cats[0],
      cats[selectedCat]
   ]
   res.render('cats/index', {cats})
})

app.listen(8000, ()=> console.log("listening on port 8000"));