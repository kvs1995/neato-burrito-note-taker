//set notes variable to require express as Router
const notes = require('express').Router();

//require fs 
const fs = require('fs');

//require the helper utilities to write to the json file
const { uuid } = require('../helpers/uuid');

//require the notesData json file
const notesData = require('../db/db.json')

//GET route for retreiving all the notes
notes.get('/', (req, res) => {
  fs.readFile(notesData).then((data) => res.json(JSON.parse(data)));
});
//GET route for a specific note

//DELETE route for a specific note


//POST  route for a new note

//export the module notes