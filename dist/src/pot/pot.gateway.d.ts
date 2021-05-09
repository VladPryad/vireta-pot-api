import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import WebSocket, { Server } from 'ws';
export declare class PotGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    handleDisconnect(client: WebSocket): void;
    handleConnection(client: WebSocket, ...args: any[]): void;
    afterInit(server: Server): void;
    server: Server;
}
