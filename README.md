## Used technologies

For front-end, React.js, Redux, Redux-saga, and Material-UI are used.
For back-end, Node.js, Express.js, socket.io, and RabbitMQ are used.
For DB, MongoDB and Mongoose.js are used.

## Approach

Client and Server pattern is used to build the application.
For real-time communication, Socket.io is used.
For normal communication (like saving and listing articles), RESTful API is used.
In order to add more flexibility on the backend jobs, CronJob and Rabbit MQ(clould service) are utilized.

When loading the list page, it calls the RESTful API for listing articles and subscribe to an event of the socket server to get updated articles. When the page is unmounted, it unsubscribes to the event.

In the backend side, in order to get the updated articles, the cron job calls the newsapi peoridcally. If there is any new article, it sends it to the Message Queue. The worker subscribes to Message queue. Whenever the new message (new article) comes, it emits an event of socket server.

Eventually, the frontend application gets the event and data from the event source.

## Steps for runing up the project.

### `yarn start` in the `frontend` folder

It will launch the frontend application on localhost:3000

### `yarn serve`

It will bootsrap the backend server on localhost:4000

On purpose, `.env` files are included for testing.
