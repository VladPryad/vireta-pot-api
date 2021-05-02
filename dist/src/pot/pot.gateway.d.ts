import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WsResponse } from '@nestjs/websockets';
import { Server, Socket } from 'ws';
export declare class PotGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    handleDisconnect(client: any): void;
    handleConnection(client: Socket, ...args: any[]): void;
    afterInit(server: Server): void;
    server: Server;
    echo(client: Socket, payload: any): WsResponse<any>;
}
