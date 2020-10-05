const amqp = require('amqplib/callback_api');

const config = require('../../config');

class MQService {
  constructor(callback) {
    this.channel = null;

    amqp.connect(config.MQConnectionUrl, (error1, conn) => {
      if (error1) {
        return callback(error1);
      }
      conn.createChannel((error2, channel) => {
        if (error2) {
          return callback(error2);
        }
        this.channel = channel;
        console.log('> successfully connected to the MQ');
      });
    });
  }

  getChannel() {
    return this.channel;
  }

  setChannel(value) {
    this.channel = value;
  }

  async publishToQueue(queueName, data) {
    await this.channel.sendToQueue(queueName, new Buffer(data));
  }
}

const mqService = new MQService();
const channel = mqService.getChannel();

process.on('exit', (code) => {
  channel.close();
  console.log(`Closing rabbitmq channel`);
});

module.exports = {
  mqService,
};
