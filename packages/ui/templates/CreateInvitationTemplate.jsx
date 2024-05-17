import CreateInvitationForm from "../organisms/CreateInvitationForm";
import InvitationView from "../organisms/InvitationView";
import InvitationResponseView from "../organisms/InvitationResponseView";
import Typography from "../atoms/Typography";

const CreateInvitationTemplate = ({
  message,
  image,
  successMessage,
  successImage,
  failedMessage,
  failedImage,
  recepient,
  responseEffect,
  responseEffectRadioGroup,
  backgroundColor,
  fontColor,
  buttonBackgroundColor,
  buttonFontColor,
  handleChangeMessage,
  handleChangeImage,
  handleChangeSuccessMessage,
  handleChangeSuccessImage,
  handleChangeFailedMessage,
  handleChangeFailedImage,
  handleChangerecepient,
  handleChangeResponseEffect,
  handleChangeBackgroundColor,
  handleChangeFontColor,
  handleChangeButtonBackgroundColor,
  handleChangeButtonFontColor,
  handleSubmit,
  preview,
}) => {
  return (
    <div className="flex flex-wrap gap-2 p-2 relative">
      <div className="w-full grow sm:w-1/3">
        <div className="pb-2">
          <Typography fontSize="lg" textCenter={true}>
            Create your invitation
          </Typography>
          <Typography fontSize="sm" textCenter={true}>
            Fill out the fields below
          </Typography>
        </div>
        <CreateInvitationForm
          message={message}
          image={image}
          successMessage={successMessage}
          successImage={successImage}
          failedMessage={failedMessage}
          failedImage={failedImage}
          recepient={recepient}
          responseEffect={responseEffect}
          responseEffectRadioGroup={responseEffectRadioGroup}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          buttonBackgroundColor={buttonBackgroundColor}
          buttonFontColor={buttonFontColor}
          handleChangeMessage={handleChangeMessage}
          handleChangeImage={handleChangeImage}
          handleChangeSuccessMessage={handleChangeSuccessMessage}
          handleChangeSuccessImage={handleChangeSuccessImage}
          handleChangeFailedMessage={handleChangeFailedMessage}
          handleChangeFailedImage={handleChangeFailedImage}
          handleChangerecepient={handleChangerecepient}
          handleChangeResponseEffect={handleChangeResponseEffect}
          handleChangeBackgroundColor={handleChangeBackgroundColor}
          handleChangeFontColor={handleChangeFontColor}
          handleChangeButtonBackgroundColor={handleChangeButtonBackgroundColor}
          handleChangeButtonFontColor={handleChangeButtonFontColor}
          handleSubmit={handleSubmit}
          preview={preview}
        />
      </div>
      <div className="flex w-full grow self-baseline sm:w-1/3">
        <div className="flex flex-wrap gap-2 sm:pr-2 sm:fixed">
          <div className="w-full">
            <Typography element="h3">Message Preview</Typography>

            <InvitationView
              message={message ? message : preview.message}
              imgUrl={image ? image : preview.messageImage}
              imgAlt="Invitation image"
              backgroundColor={
                backgroundColor ? backgroundColor : preview.backgroundColor
              }
              fontColor={fontColor ? fontColor : preview.fontColor}
              buttonBackgroundColor={
                buttonBackgroundColor
                  ? buttonBackgroundColor
                  : preview.buttonBackgroundColor
              }
              buttonFontColor={
                buttonFontColor ? buttonFontColor : preview.buttonFontColor
              }
              responses={["yes", "no"]}
            />
          </div>
          <div className="w-full grow sm:w-1/3">
            <Typography element="h3">If yes:</Typography>
            <InvitationResponseView
              message={successMessage ? successMessage : preview.successMessage}
              imgUrl={successImage ? successImage : preview.successImage}
              imgAlt="Invitation image"
              backgroundColor={
                backgroundColor ? backgroundColor : preview.backgroundColor
              }
              fontColor={fontColor ? fontColor : preview.fontColor}
            />
          </div>
          <div className="w-full grow sm:w-1/3">
            <Typography element="h3">If no:</Typography>
            <InvitationResponseView
              message={failedMessage ? failedMessage : preview.failedMessage}
              imgUrl={failedImage ? failedImage : preview.failedImage}
              imgAlt="Invitation image"
              backgroundColor={
                backgroundColor ? backgroundColor : preview.backgroundColor
              }
              fontColor={fontColor ? fontColor : preview.fontColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvitationTemplate;
