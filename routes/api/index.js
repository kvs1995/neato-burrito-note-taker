const router = require('express').Router();
const noteRoutes = require('./note-routes');


router.use('/notes', noteRoutes);


module.exports = router;
