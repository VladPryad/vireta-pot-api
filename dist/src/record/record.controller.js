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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordController = void 0;
const common_1 = require("@nestjs/common");
const record_service_1 = require("./record.service");
let RecordController = class RecordController {
    constructor(recordService) {
        this.recordService = recordService;
    }
    async getRecordsByPot(potId) {
        return await this.recordService.getRecordsByPot(potId);
    }
};
__decorate([
    common_1.Get(':potId'),
    __param(0, common_1.Param("potId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "getRecordsByPot", null);
RecordController = __decorate([
    common_1.Controller('record'),
    __metadata("design:paramtypes", [record_service_1.RecordService])
], RecordController);
exports.RecordController = RecordController;
//# sourceMappingURL=record.controller.js.map