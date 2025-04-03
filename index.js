import express from "express";

const app = express();
const PORT = process.env.PORT || 8765;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Välkommen till ditt user API");
});

const users = [
  { id: 1, name: "Mandus" },
  { id: 2, name: "Klas" },
];

// CRUD Skapa ett API för users
// GET - Hämta alla användare
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// GET med Path params - Hämta en specifik användare
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({ message: `Du frågade efter användaren med id: ${userId}` });
});

// POST - Skapa en användare
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: "Användare skapad", user: newUser });
});

// PUT - Uppdatera en specifik användare (hela user-objektet)
app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  const index = users.findIndex((user) => user.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "Användare hittades inte" });
  }

  users[index] = updatedUser;

  res.json({
    message: `Användaren med id: ${userId} är uppdaterad`,
    user: updatedUser,
  });
});

// PATCH - Uppdatera en specifik användare (delar user-objektet)
app.patch("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedPartOfUser = req.body;

  const index = users.findIndex((user) => user.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "Användare hittades inte" });
  }

  // Uppdatera bara fälten som finns i `updates`
  //   const updatedUser = { ...user, ...updatedPartOfUser };
  users[index] = { ...users[index], ...updatedPartOfUser };

  res.json({
    message: `Användaren med id: ${userId} är uppdaterad`,
    user: updatedPartOfUser,
  });
});
// DELETE - Tar bort en användare beroende på dennes ID
app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === userId);

  users.splice(index, 1); // Tar bort 1 element på plats `index`
  res.json({ message: `Användaren med id: ${userId} är borttagen` });
});

app.listen(PORT, () => {
  console.log(`server körs på http://localhost:${PORT}`);
});
