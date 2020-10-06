const amqp = require('amqplib/callback_api');
const io = require('socket.io')();

const config = require('../../config');

io.of('/article');
io.listen(config.socketPort);
console.log('>socket server is listening to:', config.socketPort);

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
          io.emit('new-articles', msg.content.toString());
        },
        { noAck: true }
      );
    });
  });
}

module.exports = {
  startWorker,
};
