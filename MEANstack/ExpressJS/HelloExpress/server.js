const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get("/users", (req, res) =>{
   var users_array = [
      {name: "Michael", email: "michael@codingdojo.com"}, 
      {name: "Jay", email: "jay@codingdojo.com"}, 
      {name: "Brendan", email: "brendan@codingdojo.com"}, 
      {name: "Andrew", email: "andrew@codingdojo.com"}
   ];
   res.render('users', {users:users_array});
})

app.get('/', (request, response) => {
   console.log(__dirname+"\\static")
   response.send("Hello Express");
});

app.use(express.static(__dirname + "\\static"))


app.listen(8000, ()=> console.log("listening on port 8000"));