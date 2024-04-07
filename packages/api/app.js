const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

const invitationsRoutes = require("./routes/invitations");
const authRoutes = require("./routes/auth");

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World to the Invitation API!");
});

app.use("/api/invitations", invitationsRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
