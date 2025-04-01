// server.js
import express from "express";
import dotenv from "dotenv";
import { greeting } from "./greetings.js";

dotenv.config(); // Laddar .env-filen

const app = express();
const port = process.env.PORT || 8000;
const username = process.env.USERNAME || "okänd";

app.get("/", (req, res) => {
  res.send(greeting(username));
});

app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`);
});
