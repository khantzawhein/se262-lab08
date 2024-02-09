const express = require("express");
const fs = require("node:fs");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
  if (!req.body.first_name || !req.body.last_name) {
    return res.status(429).send("<h1>You must enter both your first name and last name</h1>");
  }
  fs.appendFileSync("./guest.txt", `${req.body.first_name},${req.body.last_name}\n`);
  res.sendFile(`${__dirname}/thankyou.html`);
});

app.get("/guests", (req, res) => {
  let data = fs.readFileSync("./guest.txt", "utf8");
  let lines = data.trim().split("\n");

  res.setHeader("Content-Type", "text/html");
  res.write(`'<h1>The number of guests is ${lines.length}.</h1>'`);

  for (let i = 0; i < lines.length; i++) {
    let [firstName, lastName] = lines[i].trim().split(",");
    res.write(`<h3>No: ${i + 1}</h5>`);
    res.write(`First name: ${firstName}<br>`);
    res.write(`Last name: ${lastName}<br>`);

  }
  res.end();
});
