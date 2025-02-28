const io = require('socket.io-client');

const socket = io('http://localhost:3002/vehicles');

socket.on('connect', () => {
  console.log('Пользователь успешно подключен');
});

socket.on('message', (data) => {
  console.log('Получено сообщение:', data);
});

setInterval(() => {
  socket.emit('telemetry', {id: 1}, (res) => {  
    console.log('Получена телеметрия с техники:');
    console.log(res);
  });

}, 1000)


socket.on('disconnect', () => {
  console.log('Отключен от сервера');
});