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
      responseEffect,
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
      responseEffect: responseEffect,
    });
    res.status(201).json(invitation);
  } catch (error) {
    res
      .status(400)
      .json("Sorry something went wrong. Couldn't create invitation");
  }
});

/**
 ** @desc    edit invitation
 ** @route   PUT /api/invitations
 ** @access  Private
 */
const editInvitation = asyncHandler(async (req, res) => {
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
      response,
      responseEffect,
    } = req.body;

    const invitation = await Invitation.findByIdAndUpdate(
      { _id: req.params.id },
      {
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
        response,
        responseEffect,
      },
    );

    res.status(201).json(invitation);
  } catch (error) {
    res
      .status(404)
      .json("Sorry something went wrong. Couldn't edit invitation");
  }
});

/**
 ** @desc    delete invitation by id
 ** @route   DELETE /api/invitations/:id
 ** @access  Private
 */
const deleteInvitation = asyncHandler(async (req, res) => {
  try {
    await Invitation.deleteOne({ _id: req.params.id });

    res.status(200).json(req.params.id);
  } catch (error) {
    res
      .status(404)
      .json("Sorry something went wrong. Couldn't delete invitation");
  }
});

/**
 ** @desc    delete all invitations
 ** @route   DELETE /api/invitations
 ** @access  Private
 */
const deleteAllInvitations = asyncHandler(async (req, res) => {
  try {
    await Invitation.deleteMany({});
    res.status(200).json("Invitations deleted");
  } catch (error) {
    res
      .status(404)
      .json("Sorry something went wrong. Couldn't delete invitations");
  }
});

module.exports = {
  getInvitations,
  getInvitation,
  createInvitation,
  editInvitation,
  deleteInvitation,
  deleteAllInvitations,
};
