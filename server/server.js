const http = require('http');
const {Server} = require('socket.io');
const {createSocketConnect} = require('./webSocket');
const app = require('./app');

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', createSocketConnect);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
})