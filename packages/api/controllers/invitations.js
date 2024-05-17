const asyncHandler = require("express-async-handler");
const Invitation = require("../models/Invitation");

/**
 ** @desc    get all invitations
 ** @route   GET /api/invitations/all
 ** @access  Private
 ** @role    Admin
 */
const getInvitations = asyncHandler(async (req, res) => {
	try {
		if (!req.user || req.user.role !== "admin") {
			res.status(401).json("Sorry can't access page");
			return;
		}
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
		if (!invitation) {
			res
				.status(404)
				.json("Sorry something went wrong. Couldn't get invitation");
			return;
		}
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
			backgroundColor,
			fontColor,
			buttonBackgroundColor,
			buttonFontColor,
			responseEffect,
		} = req.body;

		if (!req.user) {
			res.status(401).json("Unauthorized. You are not logged in.");
			return;
		}

		if (!message || !successMessage || !failedMessage) {
			res.status(400).json("Please make sure you filled out all messages");
			return;
		}

		if (!messageImage || !successImage || !failedImage) {
			res.status(400).json("Please make sure all 3 images are provided");
			return;
		}

		const invitation = await Invitation.create({
			user: req.user.id,
			message: message,
			messageImage: messageImage,
			successMessage: successMessage,
			successImage: successImage,
			failedMessage: failedMessage,
			failedImage: failedImage,
			recepient: recepient,
			backgroundColor: backgroundColor,
			fontColor: fontColor,
			buttonBackgroundColor: buttonBackgroundColor,
			buttonFontColor: buttonFontColor,
			response: "awaiting",
			responseEffect: responseEffect !== "NO_EFFECT",
		});
		res.status(201).json(invitation);
	} catch (error) {
		res
			.status(400)
			.json("Sorry something went wrong. Couldn't create invitation" + error);
	}
});

/**
 ** @desc    edit invitation
 ** @route   PUT /api/invitations
 ** @access  Private
 */
const editInvitation = asyncHandler(async (req, res) => {
	try {
		const invitation = await Invitation.findById(req.params.id);
		if (!invitation) {
			res
				.status(404)
				.json("Sorry something went wrong. Couldn't get invitation");
			return;
		}

		const {
			message,
			messageImage,
			successMessage,
			successImage,
			failedMessage,
			failedImage,
			recepient,
			backgroundColor,
			fontColor,
			buttonBackgroundColor,
			buttonFontColor,
			response,
			responseEffect,
		} = req.body;

		if (!req.user && invitation.user.toString() !== req.user.id) {
			res.status(401).json("Unauthorized. You cannot edit this invitation.");
			return;
		}

		if (!message || !successMessage || !failedMessage) {
			res.status(400).json("Please make sure you filled out all messages");
			return;
		}

		if (!messageImage || !successImage || !failedImage) {
			res.status(400).json("Please make sure all 3 images are provided");
			return;
		}

		const invitationEdit = await Invitation.updateOne(
			{ _id: req.params.id },
			{
				message,
				messageImage,
				successMessage,
				successImage,
				failedMessage,
				failedImage,
				recepient,
				backgroundColor,
				fontColor,
				buttonBackgroundColor,
				buttonFontColor,
				response,
				responseEffect: responseEffect !== "NO_EFFECT",
			}
		);

		res.status(201).json(invitationEdit);
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
		const invitation = await Invitation.findById(req.params.id);
		if (!invitation) {
			res
				.status(404)
				.json("Sorry something went wrong. Couldn't get invitation");
			return;
		}

		if (!req.user || invitation.user.toString() !== req.user.id) {
			res.status(401).json("Unauthorized. You cannot delete this invitation.");
			return;
		}

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
 ** @role    Admin
 */
const deleteAllInvitations = asyncHandler(async (req, res) => {
	try {
		if (!req.user || req.user.role !== "admin") {
			res.status(401).json("Sorry permission denied");
			return;
		}

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
