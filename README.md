# acs-2025-H2
Repository for ACS 2025 - Q4

# Create a node project
This guide shows how to create a basic web server with node.js and express  


## Install node
[https://nodejs.org/en/download/current](https://nodejs.org/en/download/current)  

## Install VS Code
[https://code.visualstudio.com/download](https://code.visualstudio.com/download)  

## Start VS Code
Open VS Code   
Start Terminal  

## Create project root folder
create a new folder and navigate into folder:
```bash
mkdir node_examples
cd node_examples
```

## Initialize Project and install express library
```bash
npm init
```
Accept all questions with Enter  

```bash
npm i express
```
Installs the latest version of the Express library (web server)  
[https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)  


## Create WebServer Coding
See also: [https://expressjs.com/en/starter/hello-world.html](https://expressjs.com/en/starter/hello-world.html)  

Create a file called index.js and include the coding below

```js
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
  console.log(`Example app listening on port ${port}`)
})
```  

# Start your web server
```bash
node index.js
```

Alternatively you can include in package.json following the line "start": "npm index.js" in the scripts sections

```json
  "scripts": {
    "start": "node index.js"
  }
```
Tehn you can start with  
```bash
npm start
```

# Open your webserver
Your webserver is running locally with:  
- Protocol: http
- Domain: localhost
- Port: 3000

You can open your app now via:  
[http:localhost:3000](http:localhost:3000)




