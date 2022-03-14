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
//path set to '/:id'
  //set notesID = what is passed in to the request id parameters
  //fs.readFile(notesData) and parse
  //then take the json parsed data
    //set the result equal to the json data filtered to the id 
    //return if the result.length is greater than 0, the res result, else return a statment saying there are no notes yet. 

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
  //set the {title, text} equal to the req.body
  //if the req body is true (has data in it) 
    //set newNote = title, text and id: uuid()

    //read and append the newNote to the notesData
    //readFile(notesData)
      //then parse Data
      //then take the json data 
        //set the set result equal to an array (json.map(note => note)

        //push the new Note to the result

        //write the new array with the new note to the json data file. 

        //add in a response to let the user know that the note has been appended
    //else return error message that an issue occrred with adding the note.

//export the module notes

module.exports = notes;