// import the Firestore library
const { Firestore } = require('@google-cloud/firestore')
// create a new Firestore client
const firestore = new Firestore(  {
    projectId: 'pt-srh-dev',
    databaseId: 'pt-srh-dev' }) 
// Databse pt-srh-dev

// import express library
const express = require('express')
// define your express web app (app)
const app = express()
app.use(express.json())

// define the port
const port = process.env.PORT || 3000


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

app.get('/hello', (req, res) => {
  res.send('<h1>Hu hu</h1>')
})


app.post('/greet', (req, res) => {
  const name = req.body.name || 'Guest'
  res.send(`Hello ${name}, welcome to our server!`)
})

app.get('/persons', async (req, res) => {
  console.log('GET all persons');
  // read all persons from Firestore
  const personsCollection = firestore.collection('persons');
  const snapshot = await personsCollection.get();
  const persons = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.send(persons );
});

app.get('/persons/:id', (req, res) => {
  console.log(`GET person with id: ${req.params.id}`);
  res.send(`Retrieve person with id: ${req.params.id}`);
});

app.post('/persons', async (req, res) => {
  console.log('POST new person:', req.body);
  // store the new person in Firestore
  const personsCollection = firestore.collection('persons');
  try {
    const docRef = await personsCollection.add(req.body);
    res.send(`Person created with ID: ${docRef.id}`);
  } catch (error) {
    console.error('Error adding person: ', error);
    res.status(500).send('Error creating person');
  }
});

app.put('/persons/:id', (req, res) => {
  console.log(`PUT update person with id: ${req.params.id}`, req.body);
  res.send(`Update person with id: ${req.params.id}`);
});

app.delete('/persons/:id', (req, res) => {
  console.log(`DELETE person with id: ${req.params.id}`);
  res.send(`Delete person with id: ${req.params.id}`);
});


// start the server
app.listen(port, () => {
  // small system out that the server runs
  console.log(`Example app listening on port http://localhost:${port}`)
})