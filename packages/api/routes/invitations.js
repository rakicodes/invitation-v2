const express = require("express");
const {
  getInvitations,
  createInvitation,
  getInvitation,
} = require("../controllers/invitations");
const router = express.Router();

router.post("/", createInvitation);
router.get("/:id", getInvitation);
router.get("/", getInvitations);

module.exports = router;
