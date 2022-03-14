// import libraries, express
const express = require('express');
//need to import path so the new notes can be written to the json file
const path = require('path');
//import the index.js from routes
const api = require('./routes/index.js')
//import helper methods
const uuid = require('./helpers/uuid.js');

//set PORT 
const PORT = process.env.PORT || 3001;

const app = express();
//middleware for parsingJSOn and urlendcoded for data
//use express.json()
app.use(express.json());
//use express.urlencoded({ extended: true })
app.use(express.urlencoded({ extended: true }));
//set initial url to '/api'
app.use('/api', api)
//middleware to make public folder static
//express.static('public')
app.use(express.static('public'));

//GET route for homepage 
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

//GET route for notes page


//app to listen to the port
app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT}`)
);

