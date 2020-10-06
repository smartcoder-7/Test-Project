import amqp from 'amqplib/callback_api';

import config from '../config';

console.log('amqp', amqp);

class MQService {
  constructor(amqp, queueName, callback) {
    this._setup(amqp, queueName, callback);
  }

  _setup(amqp, queueName, callback) {
    amqp.connect(config.MQConnectionUrl, function (error, connection) {
      console.log('connection=========>', error);
      if (error) {
        callback && callback(error);
        throw error;
      }

      connection.createChannel(function (error, channel) {
        if (error) {
          callback && callback(error);
          throw error;
        }

        channel.assertQueue(queueName, {
          durable: false,
        });

        channel.consume(
          queueName,
          function (message) {
            console.log('get the message from the queue===>', message);
          },
          { noAck: true }
        );
      });
    });
  }
}

export default new MQService(amqp, config.queueName);
