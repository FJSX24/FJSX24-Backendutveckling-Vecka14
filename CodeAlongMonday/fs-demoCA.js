const fs = require("fs");

let quote = "Be yourself. Everyone else is already taken.";

fs.writeFile("example.txt", quote, (err) => {
  console.log("Quote saved!");
});

const text = fs.readFile("example.txt", "utf8", (err, contents) => {
  console.log(contents);
});

console.log(text);
