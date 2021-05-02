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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
let PotGateway = class PotGateway {
    handleDisconnect(client) {
        console.log(`WebSocket client disconnected ${client.id}`);
    }
    handleConnection(client, ...args) {
        console.log(`WebSocket client connected ${client.id}`);
    }
    afterInit(server) {
        console.log("WebSocket Gateway is running");
    }
    handleMessage(client, payload) {
        return {
            event: "msgToClient",
            data: 'Hello Graph'
        };
    }
};
__decorate([
    websockets_1.SubscribeMessage('msgToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], PotGateway.prototype, "handleMessage", null);
PotGateway = __decorate([
    websockets_1.WebSocketGateway()
], PotGateway);
exports.PotGateway = PotGateway;
//# sourceMappingURL=pot.gateway.js.map