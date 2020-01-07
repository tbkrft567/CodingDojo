const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')

app.use(express.static(__dirname + '/static'))

app.get('/cats', (req, res)=>{
   var catDetails = {id: 0}
   res.render("cats", {catDetails})
})
app.get('/cats1', (req, res)=>{
   var catDetails = {
      id: 1,
      favoriteFood: "Spaghetti",
      age: 3,
      sleepSpots: ["under the bed","on the pinball machine","in the sunbeam"]
   }
   res.render("cats", {catDetails})
})
app.get('/cats2', (req, res)=>{
   var catDetails = {
      id: 2,
      favoriteFood: "Pizza",
      age: 6,
      sleepSpots: ["under the bed","on the pinball machine","in the sunbeam"]
   }
   res.render("cats", {catDetails})
})

app.listen(8000, ()=> console.log("listening for port 8000"))