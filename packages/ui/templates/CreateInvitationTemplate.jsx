import CreateInvitationForm from "../organisms/CreateInvitationForm";
import InvitationView from "../organisms/InvitationView";
import InvitationResponseView from "../organisms/InvitationResponseView"
import Paragraph from "../atoms/Paragraph"

const CreateInvitationTemplate = ({
	message,
	image,
	successMessage,
	successImage,
	failedMessage,
	failedImage,
	recipient,
	responseEffect,
	responseEffectRadioGroup,
	isPublic,
	isPublicRadioGroup,
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
	handleChangeRecipient,
	handleChangeResponseEffect,
	handleChangeIsPublic,
	handleChangeBackgroundColor,
	handleChangeFontColor,
	handleChangeButtonBackgroundColor,
	handleChangeButtonFontColor,
	handleSubmit,
  preview
}) => {
	return (
		<div className="flex flex-wrap gap-2 p-2">
      <div className="w-full grow sm:w-1/3">
        <CreateInvitationForm
          message={message}
          image={image}
          successMessage={successMessage}
          successImage={successImage}
          failedMessage={failedMessage}
          failedImage={failedImage}
          recipient={recipient}
          responseEffect={responseEffect}
          responseEffectRadioGroup={responseEffectRadioGroup}
          isPublic={isPublic}
          isPublicRadioGroup={isPublicRadioGroup}
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
          handleChangeRecipient={handleChangeRecipient}
          handleChangeResponseEffect={handleChangeResponseEffect}
          handleChangeIsPublic={handleChangeIsPublic}
          handleChangeBackgroundColor={handleChangeBackgroundColor}
          handleChangeFontColor={handleChangeFontColor}
          handleChangeButtonBackgroundColor={handleChangeButtonBackgroundColor}
          handleChangeButtonFontColor={handleChangeButtonFontColor}
          handleSubmit={handleSubmit}
          preview={preview}
        />
      </div>
			<div className="flex flex-wrap gap-2 w-full grow self-baseline sm:w-1/3">
        <div className="w-full">
          <Paragraph>Message Preview</Paragraph>

          <InvitationView
            message={message ? message : preview.message}
            imgUrl={image ? image : preview.messageImage}
            imgAlt="Invitation image"
            backgroundColor={backgroundColor ? backgroundColor : preview.backgroundColor}
            fontColor={fontColor ? fontColor : preview.fontColor}
            buttonBackgroundColor={buttonBackgroundColor ? buttonBackgroundColor : preview.buttonBackgroundColor}
            buttonFontColor={buttonFontColor ? buttonFontColor : preview.buttonFontColor}
            responses={["yes", "no"]}
          />
        </div>
        <div className="w-full grow sm:w-1/3">
          <Paragraph>If yes:</Paragraph>
          <InvitationResponseView
            message={successMessage ? successMessage : preview.successMessage}
            imgUrl={successImage ? successImage : preview.successImage}
            imgAlt="Invitation image"
            backgroundColor={backgroundColor ? backgroundColor : preview.backgroundColor}
            fontColor={fontColor ? fontColor : preview.fontColor}
          />
        </div>
        <div className="w-full grow sm:w-1/3">
          <Paragraph>If no:</Paragraph>
          <InvitationResponseView
            message={failedMessage ? failedMessage : preview.failedMessage}
            imgUrl={failedImage ? failedImage : preview.failedImage}
            imgAlt="Invitation image"
            backgroundColor={backgroundColor ? backgroundColor : preview.backgroundColor}
            fontColor={fontColor ? fontColor : preview.fontColor}
          />
        </div>
      </div>
		</div>
	);
};

export default CreateInvitationTemplate;
