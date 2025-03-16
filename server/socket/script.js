import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Import the fileURLToPath and dirname functions
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const server = createServer(app);
const io = new Server(server);

const messageDb = [];


// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server.listen(8082, () => {
    console.log('Server is running on port 8082');
});

// Define the function that will be called when a new connection is made
function callConnection(socket){   
    const userIp = socket.handshake.address;  // Get user's IP address

    console.log(`User connected from IP: ${userIp}`);

    socket.emit('messages', messageDb);

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('message', (msg) => {
        messageDb.push(msg);
        io.emit('message', msg);
    });
}

// Define the function that will be called when a GET request is made
function handleGet(req, res){
    console.log('GET request received');
    res.sendFile(join(__dirname, 'index.html'));
}


io.on('connection', callConnection);

app.get('/', handleGet);

