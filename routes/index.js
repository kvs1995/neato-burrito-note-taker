//import libraries: express. 
const router = require('express').Router();

//require the notes route file
const notesRouter = require('./api');

//middleware to use '/notes' path as the url address set to the notes variables
router.use('/api', notesRouter);

//export the module app
module.exports = router;
