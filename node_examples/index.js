// import express library
const express = require('express')
// define your express web app (app)
const app = express()
// define the port
const port = 3000

// define a route for an http request 
app.get('/', (req, res) => {
  // define the html text
  let html = `
    <html>
    <h1>Hello ACS Course!</h1>
    <p>Congratulations your Express Web Server is running</p>
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