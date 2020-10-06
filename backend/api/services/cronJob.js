const cron = require('node-cron');
const { mqService } = require('./MQService');

function getUpdatedArticles() {
  cron.schedule('* * * * *', async function () {
    console.log('running a task every minute');
    await mqService.publishToQueue('article-queue', { message: 'message' });
  });
}

getUpdatedArticles();

module.exports = {
  getUpdatedArticles,
};
