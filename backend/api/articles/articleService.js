const NewsAPI = require('newsapi');
const mongoose = require('mongoose');

const Article = mongoose.model('Article');
const config = require('../../config');

const newsapi = new NewsAPI(config.newsApiKey);
const configForNews = {
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2020-09-15',
  language: 'en',
  sortBy: 'publishedAt',
};

class ArticleService {
  async list() {
    const response = await newsapi.v2.everything(configForNews);
    return response;
  }

  async create(req, res) {
    const {
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    } = req.body;

    const article = new Article({
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    });

    const newArticle = await article.save();
    return newArticle;
  }
}

module.exports = {
  articleService: new ArticleService(),
};
