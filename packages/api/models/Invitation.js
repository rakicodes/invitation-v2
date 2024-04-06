const mongoose = require("mongoose");

const Invitation = mongoose.Schema(
  {
    message: {
      type: String,
      require: true,
    },
    messageImage: {
      type: String,
      require: true,
    },
    messageCloudinaryId: {
      type: String,
      require: true,
    },
    successMessage: {
      type: String,
      required: true,
    },
    successImage: {
      type: String,
      required: true,
    },
    failedMessage: {
      type: String,
      required: true,
    },
    failedImage: {
      type: String,
      required: true,
    },
    recepient: {
      type: String,
      required: false,
    },
    response: {
      type: String,
      required: true,
    },
    responseEffect: {
      type: Boolean,
      required: true,
    },
    isPublic: {
      type: Boolean,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
    fontColor: {
      type: String,
      required: true,
    },
    buttonBackgroundColor: {
      type: String,
      required: true,
    },
    buttonFontColor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Invitation", Invitation);
