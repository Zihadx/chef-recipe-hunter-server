const express = require("express");
const data = require("./chefes.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("my data information server is coming soon");
});

app.listen(port, () => {
  console.log(`my server is running on port : ${port}`);
});
