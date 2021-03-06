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
exports.PotController = void 0;
const common_1 = require("@nestjs/common");
const create_pot_dto_1 = require("./dto/create-pot.dto");
const pot_service_1 = require("./pot.service");
let PotController = class PotController {
    constructor(potService) {
        this.potService = potService;
    }
    create(createPotDto) {
        return this.potService.create(createPotDto);
    }
    getAllPotsAccountId(id) {
        return this.potService.getAllPotsByAccountId({ id });
    }
    getRecordsByPotId(params) {
        return this.potService.getRecordsByPotId({
            id: params.id,
            periodHours: params.periodHours
        });
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pot_dto_1.default]),
    __metadata("design:returntype", Promise)
], PotController.prototype, "create", null);
__decorate([
    common_1.Get("user/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PotController.prototype, "getAllPotsAccountId", null);
__decorate([
    common_1.Get("records/:id/:periodHours"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PotController.prototype, "getRecordsByPotId", null);
PotController = __decorate([
    common_1.Controller('pot'),
    __metadata("design:paramtypes", [pot_service_1.PotService])
], PotController);
exports.PotController = PotController;
//# sourceMappingURL=pot.controller.js.map