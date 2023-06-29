const express = require('express');
const bodyParser = express.json();
const apiRouter = require('./routes/index');

const app = express();
app.use(bodyParser);
app.use('/api/', apiRouter);


//// TODO: error handling

module.exports = app;