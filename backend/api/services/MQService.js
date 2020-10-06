const amqp = require('amqplib/callback_api');

const config = require('../../config');

class MQService {
  constructor(callback) {
    this.channel = null;
    this.connection = null;
    this._setup(amqp, callback);
  }

  _setup(amqp, callback) {
    amqp.connect(config.MQConnectionUrl, (error1, conn) => {
      if (error1) {
        return callback(error1);
      }
      this.connection = conn;

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

  getConnection() {
    return this.connection;
  }

  setConnection(value) {
    this.connection = value;
  }

  async publishToQueue(queueName, data) {
    this.channel.assertQueue(queueName);
    const stringData = JSON.stringify(data);
    await this.channel.sendToQueue(queueName, Buffer.from(stringData));
  }
}

const mqService = new MQService();
const channel = mqService.getChannel();

process.on('exit', () => {
  channel.close();
  console.log(`Closing rabbitmq channel`);
});

module.exports = {
  mqService,
};
