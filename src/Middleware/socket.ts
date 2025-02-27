import { Server } from 'socket.io';
import type { ServerOptions } from 'socket.io';

const settings: Partial<ServerOptions> = {
	cors: {
		origin: ['*'],
		methods: ['GET', 'POST']
	},
	transports: ['websocket', 'polling']
};

const io = new Server(settings);

io.on('connection', (socket) => {
    console.info('Client empty io connected: ', socket.id);
});

export { io }