const express = require("express");
const app = express();
const PORT = 3000;

// Middleware för att läsa JSON
app.use(express.json());

// Bara för att visa upp något på startsidan
app.get("/", (req, res) => {
  res.send("Hello express server");
});

// CRUD med user

// GET - Hämta alla användare
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  res.status(200).json(users);
});

// GET med Path Params
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Du frågade efter användare med ID: ${userId}` });
});

// POST - Skapa ny användare
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "Användare skapad!", user: newUser });
});

// PUT - Uppdatera användare
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.json({
    message: `Användare med ID ${userId} uppdaterad!`,
    user: updatedUser,
  });
});

// DELETE - Ta bort användare
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Användare med ID ${userId} borttagen!` });
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
