// Importera Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Route för root-endpoint
app.get("/", (req, res) => {
  res.send("Välkommen till Express-servern!");
});

// Enkel API-route som returnerar JSON
app.get("/api", (req, res) => {
  res.json({ message: "API fungerar!", status: 200 });
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
