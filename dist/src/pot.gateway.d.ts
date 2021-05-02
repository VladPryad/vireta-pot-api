import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WsResponse } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class PotGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
    afterInit(server: Server): void;
    handleMessage(client: Socket, payload: any): WsResponse<string>;
}
