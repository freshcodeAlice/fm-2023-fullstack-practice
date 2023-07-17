const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const db = process.env.NODE_ENV || "development";
const CONFIG = require('../configs/db.json')[db];
const basename = path.basename(__filename);

mongoose
.connect(`mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`)
.catch(error => {
    console.log(error);
    process.exit(1);
})

const models = {}


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    models[model.modelName] = model;
  });


module.exports = models;