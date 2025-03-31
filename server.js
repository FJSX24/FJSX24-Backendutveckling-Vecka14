// Node JS server:
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hej nu har vi en Node js server!");
// });

// server.listen(8000, () => {
//     console.log("Servern, körs nu på http://localhost:8000");
// });

// ----------------------------------
// Express server:
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hej nu har vi en Express server!");
});

app.listen(8000, () => {
  console.log("Servern, körs nu på http://localhost:8000");
});
