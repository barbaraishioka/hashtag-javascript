// terminal: cd chat-page
// terminal: npm init -y
// terminal: npm install express
// terminal: node --watch ./server.js
// terminal: npm install socket.io

const http = require("http");
const express = require("express");
const app = express();
const serverHttp = http.createServer(app);
const io = require("socket.io")(serverHttp);

io.addListener("connection", (socket) => {
  // console.log("Usuário conectou");
  socket.addListener("Nova mensagem", (mensagem) => {
    io.emit("Nova mensagem", mensagem);
  });
});

app.use(express.static("public"));
serverHttp.listen(1000); // http://localhost:1000/

// cmd: ipconfig
// copia o endereço IPv4 e cola no campo mostrado abaixo;
// serverHttp.listen(1000, "IPv4");
