users = [
   {
      name: "john",
      blogs: [
            { 
               contents: "this is a blog1",
               posts: [
                        {
                           contents: "this is a post1"
                        },
                        {
                           contents: "this is a post2"
                        },
               ]
            },
            { 
               contents: "This is a blog2",
               posts: [
                        {
                           contents:"this is a post1"
                        },
                        {
                           contents: "this is a post2"
                        }
               ]
            },
      ]
   }
]

function showDate(users){
   for(user = 0; user < users.length; user++ ){
      console.log(users[user]["name"])
      blogs= users[user]["blogs"]
      for(blog = 0; blog < blogs.length; blog++){
         console.log(blogs[blog]["contents"])
         posts = blogs[blog]["posts"]
         for(post = 0; post < posts.length; post++){
            console.log(posts[post]["contents"])
         }
      }
   }
}
showDate(users)