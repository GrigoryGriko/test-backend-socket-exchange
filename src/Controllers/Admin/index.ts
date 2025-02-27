import colors from 'colors';
import * as ObjectController from '#controllers/Admin/object.controller';
import * as CompanyController from '#controllers/Admin/company.controller';
import { app } from '#middleware/rest';
import { io } from '#middleware/socket';

export const initAdminAPI = async () => {
    console.info(colors.green('[API] User API is ON'));

    app.get('/objects', ObjectController.getObjects);
    app.post('/object', ObjectController.createObject);

    app.get('/companies', CompanyController.getCompanies);
    app.post('/company', CompanyController.createCompanie);

    io.of('vehicles').on('connection', async (socket) => {
        console.info(colors.green(`[ADMIN API] Сlient io connected: ${socket.id}`));
    })
};