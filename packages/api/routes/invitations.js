const express = require("express");
const {
  getInvitations,
  createInvitation,
  getInvitation,
  editInvitation,
  deleteInvitation,
  deleteAllInvitations,
} = require("../controllers/invitations");
const router = express.Router();

router.post("/", createInvitation);
router.get("/:id", getInvitation);
router.get("/", getInvitations);
router.put("/:id", editInvitation);
router.delete("/:id", deleteInvitation);
router.delete("/", deleteAllInvitations);

module.exports = router;
