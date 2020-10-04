const { articleService } = require('./articleService');

class ArticleController {
  async list(req, res, next) {
    try {
      const response = articleService.list();
      return res.status(200).json({ success: true });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  articleController: new ArticleController(),
};
