// Requiring our express module and routes
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlroutes.js');

// Creating port (use this port number throughout)
const app = express();
const PORT = process.env.PORT || 3000;

//  ------------ Parsing, route middleware and statis files ------------------
// Parse JSON request bodies:
app.use(express.json());
// Parse URL encoded request bodies
app.use(express.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static('public'));
// Use 'apiRoutes' for '/api' routes and 'htmlRoutes' for root ('/') routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Get the express server started and lisening to the 3000 port.
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

// RUN node index.js TO START EXPRESS SERVER
// USE IMSOMNIA TO ACCESS APPLICATION: USE http://localhost:3000
