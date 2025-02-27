import { initAdminAPI } from "#controllers/Admin";
import { initVehiclesAPI } from "#controllers/Vehicles";
import { io } from "#middleware/socket";

const bootstrap = async () => {
    //Подключение к бд
    //инициализация API
    await initAdminAPI();
    await initVehiclesAPI();
    io.listen(3002)
}

bootstrap();