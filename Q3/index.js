const express = require("express");
const fs = require("node:fs");
const app = express();

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  let data = fs.readFileSync("./counter.txt", "utf8");
  let hit = parseInt(data.trim());
  let newHit = hit + 1;
  fs.writeFileSync("./counter.txt", newHit.toString());
  res.send(`<h1>There has been ${newHit} hit${newHit > 1 ? "s" : ""} to this page</h1>`);
});
