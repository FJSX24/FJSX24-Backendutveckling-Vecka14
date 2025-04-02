import express from "express";
import dotenv from "dotenv";
import greetings from "./greetings.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const userName = process.env.MY_USERNAME || "Okänd användare";

app.get("/", (req, res) => {
  //   res.send(`hej ${userName}`);
  res.send(greetings(userName));
});

app.listen(port, () => {
  console.log(`Servern körs på : http://localhost:${port}`);
});
