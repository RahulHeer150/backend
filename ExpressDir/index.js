const express = require('express')

const app = express()
let port = 8080;


app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})
 app.use((req,res)=>{
   // res.send("<h1>Hello World</h1>"); // seding response to browser as a html 
  console.log("sending response");
  res.send({name:"rahul",age:22}); // sending response to browser as a json object
  // res.send("Hello World"); // sending response to browser as a string
  // res.sendStatus(404); // sending response to browser as a status code
  // res.json({name:"rahul",age:22}); // sending response to browser as a json object
  // res.status(500).send("Internal Server Error"); // sending response to browser as a status code with message
  // res.status(200).json({name:"rahul",age:22}); // sending response to browser as a status code with json object
  // res.redirect('https://www.google.com'); // redirecting to another url
  // res.set('Content-Type', 'text/plain'); // setting content type
  // res.sendFile(__dirname + '/index.html'); // sending file as response
  // res.attachment('filename.txt'); // setting attachment header
  // res.cookie('name', 'value'); // setting cookie
  // res
 })

module.exports = app;