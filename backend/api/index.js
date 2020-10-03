const express = require('express');
const { articleRouter } = require('./routes');

const router = express.Router();

router.use('/articles', articleRouter);

module.exports = { apiRouter: router };
