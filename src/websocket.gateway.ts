import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ConfigService } from '@nestjs/config';

const myClientUrl = new ConfigService().get('CLIENT_URL');
console.log('Client URL:', myClientUrl);

@WebSocketGateway({
  cors: {
    origin: myClientUrl,
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class WebSocketAppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  myClients: any[] = [];
  constructor() {}

  @WebSocketServer()
  server: Server;

  afterInit(server: any) {
    this.server = server;
  }

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
    const newClient = {
      clientId: client.id,
      userId: '',
      name: '',
      email: '',
      roles: [],
      status: '',
    };
    this.myClients.push(newClient);
    //this.server.emit('newClients', this.myClients);
  }

  handleDisconnect(client: Socket) {
    //this.myClients = this.myClients.filter((c) => c.id !== client.id);
    console.log('Client disconnected:', client.id);
    const tempClientId = client.id;
    this.myClients = this.myClients.filter((c) => c.clientId !== tempClientId);
    this.server.emit('newClients', this.myClients);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string): void {
    console.log('Message:', payload);
    //this.server.emit('newMessage', payload);
  }

  @SubscribeMessage('join')
  handleJoinClient(client: Socket, payload: string): void {
    //console.log('Join:', payload);
    const objPayload = JSON.parse(payload);
    const tempUserId = objPayload._id;
    const tempClientId = client.id;
    const clientIndex = this.myClients.findIndex(
      (c) => c.clientId === tempClientId,
    );

    if (clientIndex !== -1) {
      this.myClients[clientIndex].userId = tempUserId;
      this.myClients[clientIndex].name = objPayload.name;
      this.myClients[clientIndex].email = objPayload.email;
      this.myClients[clientIndex].roles = objPayload.roles;
      this.myClients[clientIndex].status = objPayload.status;
    } else {
      console.log('Client not found');
    }
    console.log('Clients:', this.myClients);
    this.server.emit('newClients', this.myClients);
  }

  @SubscribeMessage('logout')
  handleLogoutClient(client: Socket, payload: string): void {
    console.log('Logout:', payload);
    const objPayload = JSON.parse(payload);
    const emailUserToLogout = objPayload.email;
    //const tempClientId = client.id;
    //this.myClients = this.myClients.filter((c) => c.userId !== tempUserId);
    const tempDataUser = this.myClients.find(
      (c) => c.email === emailUserToLogout,
    );
    this.myClients = this.myClients.filter(
      (c) => c.email !== emailUserToLogout,
    );
    console.log('Clients:', this.myClients);
    console.log('Force Logout to Data User:', tempDataUser);

    this.server
      .to(tempDataUser.clientId)
      .emit('hasToLogout', JSON.stringify(tempDataUser));
    this.server.emit('newClients', this.myClients);
  }

  @SubscribeMessage('updatedTemplateId')
  handleUpdatedTemplateId(client: Socket, payload: string): void {
    console.log('Updated Template Id:', payload);
    this.server.emit('reloadTemplateId', payload);
  }
}
