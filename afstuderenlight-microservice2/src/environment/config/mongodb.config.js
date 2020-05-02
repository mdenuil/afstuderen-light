const dotenv = require('dotenv');
dotenv.config();

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env;

const dbUrl =
  'mongodb://' +
  MONGO_USERNAME +
  ':' +
  MONGO_PASSWORD +
  '@' +
  MONGO_HOSTNAME +
  ':' +
  MONGO_PORT +
  '/' +
  MONGO_DB +
  '?authSource=admin';

module.exports = {
  dbUrl: dbUrl,
};
