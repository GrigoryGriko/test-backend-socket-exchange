# test-backend

Бэкенд для тестового задания

# work with

1. установите npm модули командой `npm i`;
2. запустите коммандой `npm run dev`.

# Вводная информация

Данный проект имитирует работу сервера. Настроено сокетное подключение двух типов клиентов.

Ваша задачи:

1. Сделать сокетный слушатель "telemetry" для техники, на который техника будет делать эмит (эндпоинт /vehicleApi) с данными:
2. 
```typescript
{
    id: 1,
    speed: 40,
    charge: 98
}
```

2. Эти данные сохранять в кэш переменную на сервере. Это может быть либо массив объектов или объект с объектами ключами которых является id:

```typescript
    [{
        id: 1,
        speed: 40,
        charge: 98
    }]
```
Или

```typescript
   {
     "1": {
         id: 1,
         speed: 40,
         charge: 98
     }
   }
```

4. Сделать слушатель "telemetry" для пользователя (эндпоинт пользователя /vehicles), куда он будет отсылать { id: 1 } для получения телеметри техники по id
5. Получать объект с данными техники из кэша сервера и возвращать их пользователю по сокету колбэком
