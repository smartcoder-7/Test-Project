const cron = require('node-cron');

const { mqService } = require('./MQService');
const config = require('../../config');

function _run() {
  cron.schedule('* * * * *', async function () {
    console.log('running a task every minute');
    await mqService.publishToQueue(config.queueName, { message: 'message' });
  });
}

async function startCronJob() {
  await _run();
}

module.exports = {
  startCronJob,
};
