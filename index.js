const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use("/", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  socket.on("msg_send", (data) => {
    // io.emit('msg_rcvd', data);
    // socket.emit('msg_rcvd', data);
    socket.broadcast.emit("msg_rcvd", data);
  });
});

server.listen(3000, () => {
  console.log(`Server started`);
});
