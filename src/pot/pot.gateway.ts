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
import WebSocket, { Server, MessageEvent } from 'ws';
import { CNN } from './constants/events';
import mockSignal from './mock/pot-measurement.mock'


@WebSocketGateway(+process.env.PORT_WS, {
  path: "/pot",
  transports: ["websocket"],
  origins: "*" })
export class PotGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect { 

  handleDisconnect(client: WebSocket) {

    client.send(JSON.stringify({
      event: CNN,
      payload: "SERVER: CLOSED"}));
    console.log(`WebSocket client disconnected `);
  }

  handleConnection(
    @ConnectedSocket() client: WebSocket,
    ...args: any[]) {

    client.send(JSON.stringify({
      event: CNN,
      payload: "SERVER: OPENED"}));
    console.log(`WebSocket client connected `);

    client.onmessage = function(event: MessageEvent): void {
      mockSignal(client, 15, 1000, event.data.toString());
    }

  }

  afterInit(server: Server) {
    console.log("WebSocket Gateway is running");
  }

  @WebSocketServer()
  server: Server;

}