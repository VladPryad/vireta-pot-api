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
exports.RpcController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_pot_dto_1 = require("../pot/dto/create-pot.dto");
const pot_entity_1 = require("../pot/pot.entity");
const pot_service_1 = require("../pot/pot.service");
const record_service_1 = require("../record/record.service");
let RpcController = class RpcController {
    constructor(potService, recordService) {
        this.potService = potService;
        this.recordService = recordService;
    }
    async createPot(dto) {
        const pot = await this.potService.create(dto);
        return { pot: pot };
    }
};
__decorate([
    microservices_1.GrpcMethod("RPC", "CreatePot"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pot_dto_1.default]),
    __metadata("design:returntype", Promise)
], RpcController.prototype, "createPot", null);
RpcController = __decorate([
    common_1.Controller('rpc'),
    __metadata("design:paramtypes", [pot_service_1.PotService, record_service_1.RecordService])
], RpcController);
exports.RpcController = RpcController;
//# sourceMappingURL=rpc.controller.js.map