const amqp = require('amqplib/callback_api');
const config = require('../../config');

function startWorker() {
  amqp.connect(config.MQConnectionUrl, function (err, connection) {
    if (err) {
      throw new Error(err);
    }

    connection.createChannel(function (err, channel) {
      if (err) {
        throw new Error(err);
      }

      channel.consume(
        config.queueName,
        function (msg) {
          console.log('Message:', msg.content.toString());
        },
        { noAck: true }
      );
    });
  });
}

module.exports = {
  startWorker,
};
