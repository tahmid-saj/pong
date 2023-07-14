const api = require("./api");

const server = require("http").createServer();

const sockets = require("./sockets");

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const PORT = 3000;
server.listen(PORT);
console.log(`Listening on port ${PORT}`);

sockets.listen(io);




