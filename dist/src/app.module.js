"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("../ormconfig");
const pot_module_1 = require("./pot/pot.module");
const rpc_module_1 = require("./rpc/rpc.module");
const record_controller_1 = require("./record/record.controller");
const record_module_1 = require("./record/record.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [pot_module_1.PotModule, typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default), rpc_module_1.RpcModule, record_module_1.RecordModule],
        controllers: [record_controller_1.RecordController],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map