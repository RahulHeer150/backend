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
app.set(express.static(path.join(__dirname, 'views')))
app.get('/', (req, res) =>{
     res.send('Hello World!')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))