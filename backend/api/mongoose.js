const mongoose = require('mongoose');
const fs = require('fs');
const config = require('../config');

const modelPaths = ['articles/articleModel'];

const initializeMongo = () => {
  if (config.isDev) {
    mongoose.set('debug', true);
  }

  mongoose.connect(
    config.mongoURL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err) => {
      if (err) {
        console.error('❌ Unable to connect mongodb');
        throw err;
      }
      // requiring models
      console.log('✅ Connected to MongoDB');
    }
  );

  modelPaths.forEach((path) => {
    require(`${__dirname}/${path}`); // eslint-disable-line
  });
};

module.exports = initializeMongo;
