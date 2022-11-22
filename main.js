
//import { WebSocketServer } from 'ws';
//const wss = new WebSocketServer({ port: 8080 });

var server = require("ws").Server;
var wss = new server({ port: 80 });

wss.on('connection', function connection(ws) {

  ws.send('something');
});
