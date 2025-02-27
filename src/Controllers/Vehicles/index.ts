import { app } from "#middleware/rest";
import { io } from "#middleware/socket";
import { resolveIp } from "./resolveIp";
import colors from 'colors';

export const initVehiclesAPI = async () => {
	app.get('/vehicle-api/ip', resolveIp);
    io.of('/vehicleApi').on('connection', async (socket) => {
        console.info(
            colors.green(`[Vehicle API] Vehicle connected. socket ID: ${socket.id}`),
        ); 

        io.of('/vehicles').emit('message', `Техника подключена socket ID: ${socket.id}`);

        socket.on('disconnect', () => {
            io.of('/vehicles').emit('message', `Техника отключена. socket ID: ${socket.id}`);
        });
    })
};