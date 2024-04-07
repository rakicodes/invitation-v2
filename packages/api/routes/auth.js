const express = require("express");
const router = express.Router();
const {
  login,
  register,
  getUser,
  deletesAllUsers,
  getUsers,
} = require("../controllers/auth");

router.get("/:id", getUser);
router.get("/", getUsers);
router.post("/login", login);
router.post("/register", register);
router.delete("/", deletesAllUsers);

module.exports = router;
