import feathers from 'feathers-client';
import io from 'socket.io-client';

let socket = io();
let app = feathers()
  .configure(feathers.hooks())
  .configure(feathers.socketio(socket));

export default app;
