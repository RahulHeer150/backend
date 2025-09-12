 const express = require('express')
const app = express()
const port = 3000

app.get('/register', (req, res) => 
    res.send('Hello World!'));
app.post('/register',(req,res)=>{
    res.send("data is sucessful")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))