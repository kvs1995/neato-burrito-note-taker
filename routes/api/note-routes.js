//set notes variable to require express as Router
const app = require('express').Router();

//require fs 
const fs = require('fs');

//require the helper utilities to write to the json file
const uuid = require('../../helpers/uuid');
//require the notesData json file
let noteData = require('../../db/db.json');

//GET route for retreiving all the notes
app.get('/', (req, res) => res.json(noteData));

//DELETE route for a specific note
//path set to '/:id
app.delete('/:id', (req, res) => {
  //set noteID = the target parameters id
  const noteId = req.params.id;
  //fs.readFile(notesData)
  noteData = noteData.filter(note => note.id !== noteId)

  fs.writeFile('./db/db.json', JSON.stringify(noteData, null, 4), (err) => err ? console.log(err) : console.info(`The specified note has been deleted.`))
  res.json(noteData);
})

//POST  route for a new note
//path set to '/'
app.post('/', (req, res) => {
  //set the {title, text} equal to the req.body
  const { title, text } = req.body;

  //if the req body is true (has data in it) 
  if (req.body) {
  //set newNote = title, text and id: uuid()
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    noteData.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(noteData, null, 4), (err) => 
      err ? console.error(err) : console.info(`A new note has been added to db.json.`))
    const response = {
      body: newNote
    }
    res.json(response)
  } else {
  //else return error message that an issue occrred with adding the note.
    res.error('There was an error in adding note.');
  }
});

//export the module notes
module.exports = app;