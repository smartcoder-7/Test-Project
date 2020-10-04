const NewsAPI = require('newsapi');
const config = require('../../config');

const newsapi = new NewsAPI(config.newsApiKey);
const configForNews = {
  category: 'technology',
  language: 'en',
  country: 'us',
};

class ArticleService {
  async list() {
    const response = await newsapi.v2.sources(configForNews);
    return response;
  }
}

module.exports = {
  articleService: new ArticleService(),
};
