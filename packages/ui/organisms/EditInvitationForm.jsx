import Button from "../atoms/Button";
import TextInputWithLabel from "../molecules/TextInputWithLabel";
import ColorInputWithLabel from "../molecules/ColorInputWithLabel";
import RadioGroup from "../molecules/RadioGroup";
import Typography from "../atoms/Typography";

const EditInvitationForm = ({
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
  handleChangeRecepient,
  handleChangeResponseEffect,
  handleChangeBackgroundColor,
  handleChangeFontColor,
  handleChangeButtonBackgroundColor,
  handleChangeButtonFontColor,
  handleSubmit,
  step
}) => {
  return (
    <form className="flex flex-col gap-2 h-full justify-center" onSubmit={handleSubmit}>
      {
        step === 0 &&
        <>
<TextInputWithLabel
        type="text"
        label="Message"
        name="message"
        required={true}
        value={message}
        onChange={handleChangeMessage}
      />
      <TextInputWithLabel
        type="text"
        label="Image URL "
        name="image"
        required={true}
        value={image}
        onChange={handleChangeImage}
      />
            <TextInputWithLabel
        type="text"
        label="recepient"
        name="recepient"
        required={true}
        value={recepient}
        onChange={handleChangeRecepient}
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
        </>
      }
      {
        step === 1 && <>
        <TextInputWithLabel
        type="text"
        label="Success Message"
        name="successMessage"
        required={true}
        value={successMessage}
        onChange={handleChangeSuccessMessage}
      />
      <TextInputWithLabel
        type="text"
        label="Success Image URL "
        name="successImage"
        required={true}
        value={successImage}
        onChange={handleChangeSuccessImage}
      />
        </>
      }
      {
        step === 2 && <>
              <TextInputWithLabel
        type="text"
        label="Failed Message"
        name="failedMessage"
        required={true}
        value={failedMessage}
        onChange={handleChangeFailedMessage}
      />
      <TextInputWithLabel
        type="text"
        label="Failed Image"
        name="failedImage"
        required={true}
        value={failedImage}
        onChange={handleChangeFailedImage}
      />
        </>
      }
      {
        step === 3 && <div className="flex flex-col gap-4">
          <div>
          <Typography textCenter={true} fontSize="lg">You're all done!</Typography>
        <Typography textCenter={true}>Here's a preview of your invitation!</Typography>
          </div>
      <Button type="submit">
        Generate Link
      </Button>
      </div>
      }

    </form>
  );
};

export default EditInvitationForm;
