const express = require("express");
const {
  getInvitations,
  createInvitation,
  getInvitation,
  editInvitation,
} = require("../controllers/invitations");
const router = express.Router();

router.post("/", createInvitation);
router.get("/:id", getInvitation);
router.get("/", getInvitations);
router.put("/:id", editInvitation);

module.exports = router;
