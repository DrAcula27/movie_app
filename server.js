const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server running.");
});

app.listen(5000, () => {
  console.log(`Server is Listening on 5000`);
});
