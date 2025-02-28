/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/Controllers/Admin/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initAdminAPI: () => (/* binding */ initAdminAPI)\n/* harmony export */ });\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! colors */ \"colors\");\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(colors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #middleware/socket */ \"./src/Middleware/socket.ts\");\n\n\nconst initAdminAPI = async () => {\n    console.info(colors__WEBPACK_IMPORTED_MODULE_0___default().green('[API] User API is ON'));\n    _middleware_socket__WEBPACK_IMPORTED_MODULE_1__.io.of('vehicles').on('connection', async (socket) => {\n        console.info(colors__WEBPACK_IMPORTED_MODULE_0___default().green(`[ADMIN API] Сlient io connected: ${socket.id}`));\n    });\n};\n\n\n//# sourceURL=webpack://tasks_test/./src/Controllers/Admin/index.ts?")},"./src/Controllers/Vehicles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initVehiclesAPI: () => (/* binding */ initVehiclesAPI)\n/* harmony export */ });\n/* harmony import */ var _middleware_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #middleware/rest */ \"./src/Middleware/rest.ts\");\n/* harmony import */ var _middleware_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #middleware/socket */ \"./src/Middleware/socket.ts\");\n/* harmony import */ var _resolveIp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveIp */ \"./src/Controllers/Vehicles/resolveIp.ts\");\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! colors */ \"colors\");\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(colors__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst initVehiclesAPI = async () => {\n    _middleware_rest__WEBPACK_IMPORTED_MODULE_0__.app.get('/vehicle-api/ip', _resolveIp__WEBPACK_IMPORTED_MODULE_2__.resolveIp);\n    _middleware_socket__WEBPACK_IMPORTED_MODULE_1__.io.of('/vehicleApi').on('connection', async (socket) => {\n        console.info(colors__WEBPACK_IMPORTED_MODULE_3___default().green(`[Vehicle API] Vehicle connected. socket ID: ${socket.id}`));\n        _middleware_socket__WEBPACK_IMPORTED_MODULE_1__.io.of('/vehicles').emit('message', `Техника подключена socket ID: ${socket.id}`);\n        socket.on('disconnect', () => {\n            _middleware_socket__WEBPACK_IMPORTED_MODULE_1__.io.of('/vehicles').emit('message', `Техника отключена. socket ID: ${socket.id}`);\n        });\n    });\n};\n\n\n//# sourceURL=webpack://tasks_test/./src/Controllers/Vehicles/index.ts?")},"./src/Controllers/Vehicles/resolveIp.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveIp: () => (/* binding */ resolveIp)\n/* harmony export */ });\nconst resolveIp = (req, res) => {\n    if (req.headers['x-forwarded-for']) {\n        res.status(200).json({\n            ip: req.headers['x-forwarded-for']\n        });\n        return;\n    }\n    if (req.headers['host']) {\n        res.status(200).json({\n            ip: req.headers['host']\n        });\n        return;\n    }\n    res.status(400).json({\n        errorMessage: 'Bad Request'\n    });\n};\n\n\n//# sourceURL=webpack://tasks_test/./src/Controllers/Vehicles/resolveIp.ts?")},"./src/Middleware/rest.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! colors */ "colors");\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({ extended: true }));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.listen(3001, () => {\n    console.info(colors__WEBPACK_IMPORTED_MODULE_1___default().magenta(`[SERVER] Server is started: ${3001}`));\n});\n\n\n\n//# sourceURL=webpack://tasks_test/./src/Middleware/rest.ts?')},"./src/Middleware/socket.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   io: () => (/* binding */ io)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);\n\nconst settings = {\n    cors: {\n        origin: ['*'],\n        methods: ['GET', 'POST']\n    },\n    transports: ['websocket', 'polling']\n};\nconst io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(settings);\nio.on('connection', (socket) => {\n    console.info('Client empty io connected: ', socket.id);\n});\n\n\n\n//# sourceURL=webpack://tasks_test/./src/Middleware/socket.ts?")},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #controllers/Admin */ "./src/Controllers/Admin/index.ts");\n/* harmony import */ var _controllers_Vehicles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #controllers/Vehicles */ "./src/Controllers/Vehicles/index.ts");\n/* harmony import */ var _middleware_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #middleware/socket */ "./src/Middleware/socket.ts");\n\n\n\nconst bootstrap = async () => {\n    //Подключение к бд\n    //инициализация API\n    await (0,_controllers_Admin__WEBPACK_IMPORTED_MODULE_0__.initAdminAPI)();\n    await (0,_controllers_Vehicles__WEBPACK_IMPORTED_MODULE_1__.initVehiclesAPI)();\n    _middleware_socket__WEBPACK_IMPORTED_MODULE_2__.io.listen(3002);\n};\nbootstrap();\n\n\n//# sourceURL=webpack://tasks_test/./src/index.ts?')},colors:_=>{_.exports=require("colors")},express:_=>{_.exports=require("express")},"socket.io":_=>{_.exports=require("socket.io")}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.ts")})();