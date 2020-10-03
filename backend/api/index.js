const express = require('express');
const { articlesRouter } = require('./routes');

const router = express.Router();

router.use('/articles', articlesRouter);

module.exports = { apiRouter: router };
