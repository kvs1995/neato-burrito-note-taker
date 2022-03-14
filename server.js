// import libraries, express
const express = require('express');
//need to import path so the new notes can be written to the json file
const path = require('path');
//import from routes
const routes = require('./routes')
//set PORT 
const PORT = process.env.PORT || 3001;

const app = express();
//middleware for parsingJSOn and urlendcoded for data
//use express.json()
app.use(express.json());
//use express.urlencoded({ extended: true })
app.use(express.urlencoded({ extended: true }));
// //set initial url to '/api'
app.use(routes);
//middleware to make public folder static
app.use(express.static('public'));

//GET route for homepage 
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for notes page
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html')))

//wildcard route to direct users to a 404 page
app.get('*', (req,res) => 
  res.sendFile(path.join(__dirname, 'public/index.html'))
);
//app to listen to the port
app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT}`)
);

