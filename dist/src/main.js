"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const dotenv = require("dotenv");
const path_1 = require("path");
dotenv.config({ path: '../.env' });
const microserviceOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        package: "rpc",
        url: `0.0.0.0:${process.env.PORT_GRPC}`,
        protoPath: path_1.join(process.cwd(), 'src/proto/rpc.proto')
    }
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice(microserviceOptions);
    await app.startAllMicroservicesAsync();
    await app.listen(process.env.PORT_REST);
}
(async () => await bootstrap())();
//# sourceMappingURL=main.js.map