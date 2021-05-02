"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const record_entity_1 = require("../record/record.entity");
const pot_controller_1 = require("./pot.controller");
const pot_entity_1 = require("./pot.entity");
const pot_service_1 = require("./pot.service");
const pot_gateway_1 = require("./pot.gateway");
let PotModule = class PotModule {
};
PotModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([pot_entity_1.default]), typeorm_1.TypeOrmModule.forFeature([record_entity_1.default])],
        controllers: [pot_controller_1.PotController],
        providers: [pot_service_1.PotService, pot_gateway_1.PotGateway],
        exports: [pot_service_1.PotService]
    })
], PotModule);
exports.PotModule = PotModule;
//# sourceMappingURL=pot.module.js.map