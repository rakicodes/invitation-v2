import Button from "../atoms/Button";
import TextInputWithLabel from "../molecules/TextInputWithLabel";
import ColorInputWithLabel from "../molecules/ColorInputWithLabel";
import RadioGroup from "../molecules/RadioGroup";

const CreateInvitationForm = ({
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
  preview,
}) => {
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <TextInputWithLabel
        type="text"
        label="Message"
        name="message"
        required={true}
        value={message}
        onChange={handleChangeMessage}
        placeholder={preview.message}
      />
      <TextInputWithLabel
        type="text"
        label="Image URL "
        name="image"
        required={true}
        value={image}
        onChange={handleChangeImage}
        placeholder={preview.messageImage}
      />
      <TextInputWithLabel
        type="text"
        label="Success Message"
        name="successMessage"
        required={true}
        value={successMessage}
        onChange={handleChangeSuccessMessage}
        placeholder={preview.successMessage}
      />
      <TextInputWithLabel
        type="text"
        label="Success Image URL "
        name="successImage"
        required={true}
        value={successImage}
        onChange={handleChangeSuccessImage}
        placeholder={preview.successImage}
      />
      <TextInputWithLabel
        type="text"
        label="Failed Message"
        name="failedMessage"
        required={true}
        value={failedMessage}
        onChange={handleChangeFailedMessage}
        placeholder={preview.failedMessage}
      />
      <TextInputWithLabel
        type="text"
        label="Failed Image"
        name="failedImage"
        required={true}
        value={failedImage}
        onChange={handleChangeFailedImage}
        placeholder={preview.failedImage}
      />
      <TextInputWithLabel
        type="text"
        label="Recipient"
        name="Recipient"
        required={true}
        value={recipient}
        onChange={handleChangeRecipient}
        placeholder={preview.recepient}
      />
      <div className="flex flex-wrap gap-2 w-full">
        <ColorInputWithLabel
          type="color"
          label="Background Color"
          name="backgroundColor"
          required={true}
          value={backgroundColor}
          onChange={handleChangeBackgroundColor}
        />
        <ColorInputWithLabel
          type="color"
          label="Font Color"
          name="fontColor"
          required={true}
          value={fontColor}
          onChange={handleChangeFontColor}
        />
        <ColorInputWithLabel
          type="color"
          label="Button Background Color"
          name="buttonBackgroundColor"
          required={true}
          value={buttonBackgroundColor}
          onChange={handleChangeButtonBackgroundColor}
        />
        <ColorInputWithLabel
          type="color"
          label="Button Font Color"
          name="buttonFontColor"
          required={true}
          value={buttonFontColor}
          onChange={handleChangeButtonFontColor}
        />
      </div>

      <RadioGroup
        title="Response Effect?"
        radios={responseEffectRadioGroup}
        onChange={handleChangeResponseEffect}
        selected={responseEffect}
      />
      <RadioGroup
        title="Visibility?"
        radios={isPublicRadioGroup}
        onChange={handleChangeIsPublic}
        selected={isPublic}
      />
      <Button type="submit">
        Create Invitation
      </Button>
    </form>
  );
};

export default CreateInvitationForm;
