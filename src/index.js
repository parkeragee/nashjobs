'use strict';

const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

server.on('listening', () =>
  console.log(` 📰  ✅  -> jobs api started on ${app.get('host')}:${port}`)
);
