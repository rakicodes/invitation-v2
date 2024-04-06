const asyncHandler = require("express-async-handler");
const Invitation = require("../models/Invitation");

/**
 ** @desc    get all invitations
 ** @route   GET /api/invitations
 ** @access  Public
 */
const getInvitations = asyncHandler(async (req, res) => {
  try {
    const invitations = await Invitation.find();
    res.status(200).json(invitations);
  } catch (error) {
    res
      .status(400)
      .json("Sorry something went wrong. Couldn't get invitations");
  }
});

/**
 ** @desc    get invitation by id
 ** @route   GET /api/invitations/:id
 ** @access  Public or Private
 */
const getInvitation = asyncHandler(async (req, res) => {
  try {
    const invitation = await Invitation.findById(req.params.id);
    res.status(200).json(invitation);
  } catch (error) {
    res.status(404).json("Sorry something went wrong. Couldn't get invitation");
  }
});

/**
 ** @desc    create invitation
 ** @route   POST /api/invitations
 ** @access  Private
 */
const createInvitation = asyncHandler(async (req, res) => {
  try {
    const {
      message,
      messageImage,
      successMessage,
      successImage,
      failedMessage,
      failedImage,
      recepient,
      isPublic,
      backgroundColor,
      fontColor,
      buttonBackgroundColor,
      buttonFontColor,
    } = req.body;

    const invitation = Invitation.create({
        message: message,
        messageImage: messageImage,
        successMessage: successMessage,
        successImage: successImage,
        failedMessage: failedMessage,
        failedImage: failedImage,
        recepient: recepient,
        isPublic: isPublic,
        backgroundColor: backgroundColor,
        fontColor: fontColor,
        buttonBackgroundColor: buttonBackgroundColor,
        buttonFontColor: buttonFontColor,
        response: "awaiting",
    });
    res.status(201).json(invitation);
  } catch (error) {
    res
      .status(400)
      .json("Sorry something went wrong. Couldn't create invitation");
  }
});

module.exports = {
  getInvitations,
  getInvitation,
  createInvitation,
};
