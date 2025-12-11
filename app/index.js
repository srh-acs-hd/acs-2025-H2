// import express library
const express = require('express')
// define your express web app (app)
const app = express()
app.use(express.json());

// define the port
const port = process.env.PORT || 3000

// define a route for an http request 
app.get('/', (req, res) => {
  // define the html text
  let html = `
    <html>
    <h1>Default APP</h1>
    </html>
  `
  // send the html as response
  res.send(html)
})

// start the server
app.listen(port, () => {
  // small system out that the server runs
  console.log(`Example app listening on port http://localhost:${port}`)
})