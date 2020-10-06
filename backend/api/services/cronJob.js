const cron = require('node-cron');
const equal = require('fast-deep-equal');

const { articleService } = require('../articles/articleService');
const { mqService } = require('./MQService');
const { cache } = require('./fakeCache');
const config = require('../../config');

function diff(list1, list2) {
  let result = null;

  if (!Array.isArray(list1) || !Array.isArray) {
    return result;
  }

  for (let i = 0; i < list1.length; i++) {
    let found = false;

    for (let j = 0; j < list2.length; j++) {
      found = list1[i].url === list2[j].url;
    }

    if (!found) {
      result.push(item1);
    }
  }

  return result;
}

function _run() {
  cron.schedule('* * * * *', async function () {
    const response = await articleService.list();

    if (!cache) {
      cache.write(response);
      return;
    }

    if (!equal(cache, response)) {
      let newArticles = diff(response, cache);
      if (newArticles) {
        cache.write(response);
        await mqService.publishToQueue(config.queueName, newArticles);
      }
    }
  });
}

async function startCronJob() {
  await _run();
}

module.exports = {
  startCronJob,
};
