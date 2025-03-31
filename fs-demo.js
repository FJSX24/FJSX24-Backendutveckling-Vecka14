const fs = require("fs");

let quote = "Fånga dagen";

fs.writeFile("example.txt", quote, (err) => {
  console.log(
    "example.txt har skapats och quote strängen lagts in i den filen."
  );
});

fs.readFile("example.txt", "utf8", (err, content) => {
  console.log("content : ", content);
});
