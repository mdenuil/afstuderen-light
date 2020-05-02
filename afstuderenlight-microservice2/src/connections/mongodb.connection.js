const mongoose = require('mongoose');
const config = require('../environment/config/mongodb.config');

mongoose.Promise = global.Promise;

mongoose.connect(config.dbUrl, { useNewUrlParser: true });

const connection = mongoose.connection
  .once('open', () => {
    console.log('Connected to Mongo with URL: ');
    console.log(config.dbUrl);
  })
  .on('error', error => {
    console.error('Failed to connect: ' + error);
  });

module.exports = connection;
