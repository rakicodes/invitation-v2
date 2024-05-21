import Button from "../atoms/Button";
import TextInputWithLabel from "../molecules/TextInputWithLabel";
import ColorInputWithLabel from "../molecules/ColorInputWithLabel";
import RadioGroup from "../molecules/RadioGroup";
import Typography from "../atoms/Typography";

const CreateInvitationForm = ({
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
  step,
}) => {
  return (
    <form className="flex flex-col gap-2 h-full" onSubmit={handleSubmit}>
      {step === 0 && (
        <>
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
        </>
      )}
      {step === 1 && (
        <>
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
        </>
      )}
      {step === 2 && (
        <>
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
        </>
      )}
      {step === 3 && (
        <div className="flex flex-col gap-4 justify-between h-full">
          <div>
            <TextInputWithLabel
              type="text"
              label="recepient"
              name="recepient"
              required={true}
              value={recepient}
              onChange={handleChangerecepient}
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
              <RadioGroup
                title="Response Effect?"
                radios={responseEffectRadioGroup}
                onChange={handleChangeResponseEffect}
                selected={responseEffect}
              />
            </div>
          </div>

          <Button type="submit">Generate Link</Button>
        </div>
      )}
    </form>
  );
};

export default CreateInvitationForm;
