const cron = require('node-cron');

const { mqService } = require('./MQService');
const config = require('../../config');

const fakeArticles = [
  {
    author: 'Catherine Shu',
    title:
      'Cryptocurrency wallet BRD reaches 6 million users, driven by growth in Latin America and India',
    description:
      'Mobile cryptocurrency wallet BRD announced today that it now has more than six million users worldwide, thanks to strong growth in India and Latin America. With this momentum, the company expects to reach 10 million users by early 2021. Founded in 2015, Zuric…',
    url:
      'http://techcrunch.com/2020/10/06/cryptocurrency-wallet-brd-reaches-6-million-users-driven-by-growth-in-latin-america-and-india/',
    urlToImage:
      'https://techcrunch.com/wp-content/uploads/2020/10/GettyImages-1216921783.jpg?w=576',
    publishedAt: '2020-10-06T07:15:13Z',
    content:
      'Mobile cryptocurrency wallet BRD announced today that it now has more than six million users worldwide, thanks to strong growth in India and Latin America. With this momentum, the company expects to … [+2634 chars]',
  },
];

function _run() {
  cron.schedule('* * * * *', async function () {
    console.log('running a task every minute');
    await mqService.publishToQueue(config.queueName, fakeArticles);
  });
}

async function startCronJob() {
  await _run();
}

module.exports = {
  startCronJob,
};
