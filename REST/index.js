 const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
app.use(methodOverride('_method')) // override with POST having ?_method=DELETE or ?_method=PUT
; // -> '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') // Set EJS as the templating engine
// Define a route that renders an EJS template
//
app.use(express.static(path.join(__dirname, 'public')))

let posts=[
    {
        id:uuidv4(),
        username:"rahul",
        content:"hello this is my first post"
    },
    {
        id:uuidv4(),
        username:"john",
        content:"hello this is my second post"
    },
     {
        id:uuidv4(),
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
app.get('/posts/:id/edit', (req, res) =>{
     let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render('edit.ejs')
});

app.patch('/posts/:id',(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    console.log(newContent)
    console.log(id)
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(posts)
   res.send("updating a post");
});

app.get('/posts/:id', (req, res) =>{
    let {id}=req.params;
   let post=posts.find((p)=>id===p.id);
   res.render('show.ejs',{post,id})
});
app.post('/posts',(req,res)=>{ 
   let {username,content}=req.body;
   let id=uuidv4();
   posts.push({id,username,content});
   console.log(posts); // shows posts in server console
    res.send("form submitted");
    
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))