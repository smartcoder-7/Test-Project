const { articleService } = require('./articleService');

class ArticleController {
  async list(req, res, next) {
    try {
      const response = await articleService.list();
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async save(req, res, next) {
    try {
      console.log('I am called in saving=========>');
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
