// server.js
const express = require('express');
const WebSocket = require('ws');

const app = express();
const server = app.listen(8080, () =>
  console.log('Server is running on port 8080')
);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Broadcast incoming messages to all clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

