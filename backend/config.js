const dotenv = require('dotenv');

const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  try {
    dotenv.config();
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  host: process.env.HOST || 'http://localhost',
  port: parseInt(process.env.PORT, 10) || 4000,
  isDev,
  mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/bavity-test',
  newsApiKey: process.env.NEWS_API_KEY,
  MQConnectionUrl: process.env.MQ_CONNECTION_URL,
};
