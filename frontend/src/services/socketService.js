import openSocket from 'socket.io-client';
import config from '../config';
const socket = openSocket(config.socketUrl);

export const subscribeToEvent = (event, cb) => {
  socket.on(event, (data) => {
    console.log('new articles arrived', JSON.parse(data));
    cb(JSON.parse(data));
  });
};

export const unsubscribeToEvent = (event) => {
  socket.off(event, () => {
    console.log('unsubscribed successfullly');
  });
};
