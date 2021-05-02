import { 
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse } from '@nestjs/websockets';
//import { Server, Socket } from 'socket.io';
import { Server, Socket } from 'ws';


@WebSocketGateway(+process.env.PORT_WS, { path: "/pot", transports: ["websocket"] })
export class PotGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect { 

  handleDisconnect(client: any) {
    console.log(`WebSocket client disconnected ${client}`); //TODO: SocketIO vs WS Adapter issue
  }

  handleConnection(
    @ConnectedSocket() client: Socket,
    ...args: any[]) {
    console.log(`WebSocket client connected ${client.id}`);
  }

  afterInit(server: Server) {
    console.log("WebSocket Gateway is running");
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('echo')
  echo(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: any
  ): WsResponse<any> {
    return {
      ...payload
    }
  }
}