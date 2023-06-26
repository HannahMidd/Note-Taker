const path = require('path');
const router = require('express').Router();

// The /notes will get (respond with) the notes.html file:
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// All other (*) routes will respond with the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Export the 'router' object from module
module.exports = router;
