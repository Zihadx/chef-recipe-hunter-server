const express = require("express");
const data = require("./chefs.json");
const app = express();
const port =process.env.PORT || 5000;
const cors = require('cors')
app.use(cors())


app.get("/", (req, res) => {
  res.send("my data information server is coming soon");
});


app.get("/data", (req, res) => {
  res.send(data);
});
app.get("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("i need data for id", id);
  const singleData = data.find((singleData) => singleData.id === id) || {};
  res.send(singleData)
});

app.listen(port, () => {
  console.log(`my server is running on port : ${port}`);
});
