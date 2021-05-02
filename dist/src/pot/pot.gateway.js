"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const ws_1 = require("ws");
let PotGateway = class PotGateway {
    handleDisconnect(client) {
        console.log(`WebSocket client disconnected ${client}`);
    }
    handleConnection(client, ...args) {
        console.log(`WebSocket client connected ${client.id}`);
    }
    afterInit(server) {
        console.log("WebSocket Gateway is running");
    }
    echo(client, payload) {
        return Object.assign({}, payload);
    }
};
__decorate([
    __param(0, websockets_1.ConnectedSocket()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof ws_1.Socket !== "undefined" && ws_1.Socket) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", void 0)
], PotGateway.prototype, "handleConnection", null);
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", typeof (_b = typeof ws_1.Server !== "undefined" && ws_1.Server) === "function" ? _b : Object)
], PotGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage('echo'),
    __param(0, websockets_1.ConnectedSocket()),
    __param(1, websockets_1.MessageBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof ws_1.Socket !== "undefined" && ws_1.Socket) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Object)
], PotGateway.prototype, "echo", null);
PotGateway = __decorate([
    websockets_1.WebSocketGateway(+process.env.PORT_WS, { path: "/pot", transports: ["websocket"] })
], PotGateway);
exports.PotGateway = PotGateway;
//# sourceMappingURL=pot.gateway.js.map