export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:4000'
    : 'http://localhost:4000';

const config = {
  MQConnectionUrl: process.env.REACT_APP_MQ_CONNECTION_URL,
  queueName: process.env.REACT_APP_QNAME,
  socketUrl: process.env.REACT_APP_SOCKET_URL,
};

export default config;
