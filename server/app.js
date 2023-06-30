const express = require('express');
const bodyParser = express.json();
const apiRouter = require('./routes/index');
const cors = require('cors');
const {errorHandling} = require('./errorHandling');

const app = express();
app.use(cors());
app.use(bodyParser);
app.use('/api/', apiRouter);

app.use(errorHandling);

//// TODO: error handling

module.exports = app;