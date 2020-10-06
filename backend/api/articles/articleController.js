const { articleService } = require('./articleService');
const APIError = require('../utils/apiError');
const { cache } = require('../services/fakeCache');
class ArticleController {
  async list(req, res, next) {
    try {
      const response = await articleService.list();
      cache.write(response);

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async save(req, res, next) {
    try {
      const foundArticle = await articleService.findOne(req, res);
      if (foundArticle) {
        throw new APIError('This article has already saved!', 400);
      }

      const savedArticle = await articleService.create(req, res);
      return res.status(201).json(savedArticle);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  articleController: new ArticleController(),
};
