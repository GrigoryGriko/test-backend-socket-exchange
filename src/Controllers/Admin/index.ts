import colors from 'colors';
import { io } from '#middleware/socket';

export const initAdminAPI = async () => {
    console.info(colors.green('[API] User API is ON'));

    io.of('vehicles').on('connection', async (socket) => {
        console.info(colors.green(`[ADMIN API] Сlient io connected: ${socket.id}`));
    })
};