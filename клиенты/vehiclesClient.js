const io = require('socket.io-client');

const socket = io('http://localhost:3002/vehicleApi');

function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

socket.on('connect', () => {
  console.log('Техника успешно подключена');
});

socket.on('message', (data) => {
  console.log('Получено сообщение:', data);
});

setInterval(() => {
  socket.emit('telemetry', {
    id: 1,
    speed: generateRandomNumber(),
    charge: 95
  });

  console.log('Телеметрия отправлена');
}, 1000)

socket.on('disconnect', () => {
  console.log('Отключен от сервера');
});