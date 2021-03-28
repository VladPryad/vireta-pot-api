"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });
const ormconfig = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [
        'dist/**/*.entity{ .ts,.js}'
    ],
    synchronize: true,
    logging: false
};
exports.default = ormconfig;
//# sourceMappingURL=ormconfig.js.map