const axios = require("axios");
const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/get_movie/:movieString", async (req, res) => {
  console.log(req.params.movieString);

  let apiResponse = await axios(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.params.movieString}`
  );
  const data = apiResponse.data;

  console.log(data);

  res.json(data);
});

app.listen(5000, () => {
  console.log(`Server is Listening on 5000`);
});
