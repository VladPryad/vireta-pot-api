"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pot_entity_1 = require("../pot/pot.entity");
const record_controller_1 = require("./record.controller");
const record_entity_1 = require("./record.entity");
const record_service_1 = require("./record.service");
let RecordModule = class RecordModule {
};
RecordModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([pot_entity_1.default]), typeorm_1.TypeOrmModule.forFeature([record_entity_1.default])],
        controllers: [record_controller_1.RecordController],
        providers: [record_service_1.RecordService],
        exports: [record_service_1.RecordService]
    })
], RecordModule);
exports.RecordModule = RecordModule;
//# sourceMappingURL=record.module.js.map