const express = require('express')
const app = express()
let port = 8080;

app.set('view engine', 'ejs'); // setting ejs as view engine

app.get('/', (req, res) => {
    res.send("this is home"); // rendering index.ejs file
});
app.listen(port, () => {
    console.log(` app listening on port ${port}`)
})