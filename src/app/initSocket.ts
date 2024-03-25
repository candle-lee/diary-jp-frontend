import { io, Socket } from "socket.io-client"

declare global {
    interface Window {
        socket: Socket | undefined;
    }
}

export default () => {
    // Create Socket.IO connection
    let socket: Socket;
    socket = io(import.meta.env.VITE_API_DEEPGRAM_URL + "/deepgram",); // Replace with your server URL

    // Event handlers
    socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
        // Handle connection
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from Socket.IO server');
        // Handle disconnection
    });

    window.socket = socket;
}