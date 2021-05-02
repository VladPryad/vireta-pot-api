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
exports.PotService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const record_entity_1 = require("../record/record.entity");
const typeorm_2 = require("typeorm");
const pot_entity_1 = require("./pot.entity");
let PotService = class PotService {
    constructor(potRepository, recordRepository) {
        this.potRepository = potRepository;
        this.recordRepository = recordRepository;
    }
    create(dto) {
        const pot = new pot_entity_1.default();
        pot.accountId = dto.accountId;
        pot.name = dto.name || "";
        return this.potRepository.save(pot);
        ;
    }
    async getAllPotsByAccountId(dto) {
        const pots = await this.potRepository.find({
            where: {
                accountId: dto.id
            }
        });
        return { pots };
    }
    async getRecordsByPotId(dto) {
        const records = await this.recordRepository
            .createQueryBuilder("record")
            .where(`record.potId = ${dto.id}`)
            .orderBy("record.timestamp", "DESC")
            .take(dto.periodHours * +process.env.SAMPLING_RATE || +process.env.RECORD_COUNT)
            .getMany();
        return { records };
    }
};
PotService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pot_entity_1.default)),
    __param(1, typeorm_1.InjectRepository(record_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PotService);
exports.PotService = PotService;
//# sourceMappingURL=pot.service.js.map