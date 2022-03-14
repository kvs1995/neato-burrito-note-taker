//import libraries: express. 
const express = require('express');

//require the notes route file
const notesRouter = require('./notes');

//set app variable to express ()
const app = express();

//middleware to use '/notes' path as the url address set to the notes variables
app.use('/notes', notesRouter);

//export the module app
module.exports = app;
