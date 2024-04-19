import CreateInvitationForm from "../organisms/CreateInvitationForm";
import FormContainer from "../atoms/FormContainer";
import InvitationView from "../organisms/InvitationView";

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
}) => {
  return (
    <>
      <FormContainer>
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
        />
      </FormContainer>
    </>
  );
};

export default CreateInvitationTemplate;
