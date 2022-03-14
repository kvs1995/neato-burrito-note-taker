//set notes variable to require express as Router
const app = require('express').Router();

//require fs 
const fs = require('fs');

//require the helper utilities to write to the json file
const uuid = require('../../helpers/uuid');

//require the notesData json file
const noteData = require('../../db/db.json')

//GET route for retreiving all the notes
app.get('/', (req, res) => res.json(noteData));

//DELETE route for a specific note
//path set to '/:id
  //set noteID = the target parameters id
  //fs.readFile(notesData)
    //then take data and parse
    //THEN with the parsed json data
      //make a new array of all notes except the one with ID provided in the URL

      //save that array to the filesystem (fs.writeToFile(notesData), the new array)

      //add in a response to let the user know that the data attached to the id has been deleted

//POST  route for a new note
//path set to '/'
app.post('/', (req, res) => {
  console.log(req.body)
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
    console.log('New Note: ', newNote)
    //read and append the newNote to the notesData
    // readFile(notesData)
    fs.readFile(noteData)
    //then parse Data
      .then((data) => {
        const parsedData = JSON.parse(data)
        //push the new Note to the result
        parsedData.push(newNote)
        //write the new array with the new note to the json data file. 
        fs.writeFile(noteData, JSON.stringify(newNote, null, 4), (err) => 
          err ? console.error(err) : console.info(`\nData written to ${noteData}`))
        //add in a response to let the user know that the note has been appended
        res.json(`Note added successfully.`)
      })
  } else {
  //else return error message that an issue occrred with adding the note.
    res.error('There was an error in adding tip.');
  }
});

//export the module notes
module.exports = app;