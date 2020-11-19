/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

 @WebSocketServer() server: Server;
 private logger: Logger = new Logger('AppGateway');

 @SubscribeMessage('msgToServer')
 handleMessage(client: Socket, payload: string): void {
  this.server.emit('msgToClient', payload);
  console.log(payload);
 }

 @SubscribeMessage('susbcrible-client')
 handleClientConnect(client: Socket, payload: string) : void {
    console.log(payload);
 }

 @SubscribeMessage('create-room')
 handleCreateNewRoom(client: Socket, payload: {roomId: string}) :void {
     console.log(payload);
     client.join(payload.roomId);
 }

 @SubscribeMessage('send-mess')
 handleSendMess(client: Socket, payload: any) :void{
     console.log(payload);
    this.server.to(payload.conversationId).emit('receiver-mess', payload);
 }

 afterInit(_server: Server) {
  this.logger.log('Init');
 }

 handleDisconnect(client: Socket) {
  this.logger.log(`Client disconnected: ${client.id}`);
  console.log(`Client disconnected: ${client.id}`)
 }

 handleConnection(client: Socket, ...args: any[]) {
  this.logger.log(`Client connected: ${client.id}`);
  console.log(`Client connected: ${client.id}`)
 }
}