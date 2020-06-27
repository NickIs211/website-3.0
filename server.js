const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

// const history = require('connect-history-api-fallback')
const port = process.env.PORT || 8080;

const app = express()
  // .use(history())
  .use(cors())
  .use(bodyparser.json());

app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.get(/.*/, (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
