 const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') // Set EJS as the templating engine
// Define a route that renders an EJS template
//
app.use(express.static(path.join(__dirname, 'public')))

let posts=[
    {
        username:"rahul",
        content:"hello this is my first post"
    },
    {
        username:"john",
        content:"hello this is my second post"
    },
     {
        username:"john",
        content:"hello this is my first internship"
    },
]

app.get('/posts', (req, res) =>{
     res.render('index.ejs',{posts})
});
app.get('/posts/new',(req,res)=>{
    res.render('new.ejs');
});
app.post('/posts',(req,res)=>{
   let {username,content}=req.body;
   posts.push({username,content});
   console.log(posts); // shows posts in server console
    res.send("form submitted");
    
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))