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
const { protect } = require("../middleware/auth");

router.post("/", protect, createInvitation);
router.get("/all", protect, getInvitations);
router.get("/:id", getInvitation);
router.put("/:id", protect, editInvitation);
router.delete("/:id", protect, deleteInvitation);
router.delete("/", protect, deleteAllInvitations);

module.exports = router;
