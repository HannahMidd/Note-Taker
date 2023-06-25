// Requiring our express module and routes
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlroutes');

// Creating port (use this port number throughout)
const app = express();
const PORT = 3000;

// Get the express server started and lisening to the 3000 port.
app.listen(port, () => {
    console.log('Server listening on port ${PORT}');
});

// RUN node index.js TO START EXPRESS SERVER
// USE IMSOMNIA TO ACCESS APPLICATION: USE http://localhost:3000
