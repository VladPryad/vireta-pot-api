"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const platform_ws_1 = require("@nestjs/platform-ws");
const dotenv = require("dotenv");
const path_1 = require("path");
const morgan = require("morgan");
dotenv.config({ path: '../.env' });
const microserviceOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        package: "rpc",
        url: process.env.GRPC_CONNECTION_URL,
        protoPath: path_1.join(process.cwd(), 'src/proto/rpc.proto')
    }
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: "*"
    });
    app.use(morgan("tiny"));
    app.connectMicroservice(microserviceOptions);
    await app.startAllMicroservicesAsync();
    app.useWebSocketAdapter(new platform_ws_1.WsAdapter(app));
    await app.listen(process.env.PORT_REST);
}
(async () => {
    await bootstrap();
    console.log(`Pot API running on: \r\n REST: ${process.env.PORT_REST} \r\n gRPC: ${process.env.PORT_GRPC} \r\n WS:   ${process.env.PORT_WS}`);
})();
//# sourceMappingURL=main.js.map