import express from "express";

const app = express();
const PORT = process.env.PORT || 8765;

app.get("/", (req, res) => {
  res.send("Välkommen till din express server");
});

app.get("/api", (req, res) => {
  res.json({ message: "APIet fungerar", status: 200 });
});

app.listen(PORT, () => {
  console.log(`server körs på http://localhost:${PORT}`);
});
