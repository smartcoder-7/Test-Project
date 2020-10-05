const express = require('express');
const { articleController } = require('./articleController');

const router = express.Router();

router.route('/').get(articleController.list).post(articleController.save);

module.exports = {
  articleRouter: router,
};
