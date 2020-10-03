class ArticleController {
  async list(req, res, next) {
    return res.status(200).json({ success: true });
  }
}

module.exports = {
  articleController: new ArticleController(),
};
