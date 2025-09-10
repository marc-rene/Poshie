
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket: any) => {
    console.log('Someone connected: ' + socket.id);

    socket.on('message', (message: string) =>     {
        console.log(message);
        io.emit('message', `${socket.id.substr(0,5)} said ${message}` );   
    });
});

console.log("Hello :)")
http.listen(8080, () => console.log('listening on http://localhost:8080') );
