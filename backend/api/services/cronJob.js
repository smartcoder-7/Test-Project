const cron = require('node-cron');
const { mqService } = require('./MQService');

function getUpdatedArticles() {
  cron.schedule('* * * * *', async function () {
    console.log('running a task every minute');
    await mqService.publishToQueue('queueName', { message: 'message' });
  });
}

module.exports = {
  getUpdatedArticles,
};
