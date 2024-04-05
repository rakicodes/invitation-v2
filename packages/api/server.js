const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3333;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World to the Invitation API!");
});

app.listen(port, () => {
  console.log(`Invitation API listening on port ${port}`);
});