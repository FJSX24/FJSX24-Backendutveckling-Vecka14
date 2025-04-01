// Skapa en server med Nodejs
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hej från Node.js-servern!");
});

server.listen(3000, () => {
  console.log("Server körs på http://localhost:3000");
});

// ------------------------------------------

// Sen hur man skapa en server med Express
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hej från express-servern"));

app.listen(3000, () => console.log("Servern körs på port 3000"));
