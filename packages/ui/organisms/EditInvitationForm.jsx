import Button from "../atoms/Button";
import TextInputWithLabel from "../molecules/TextInputWithLabel";
import ColorInputWithLabel from "../molecules/ColorInputWithLabel";
import RadioGroup from "../molecules/RadioGroup";
import Typography from "../atoms/Typography";
import SearchGiphy from "./SearchGiphy";

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
  step,
  messageSearch,
  handleMessageSearch,
  handleSubmitMessageSearch,
  messageSearchData,
  handleSearchMessageSelect,
  successMessageSearch,
  handleSuccessMessageSearch,
  handleSubmitSuccessMessageSearch,
  successMessageSearchData,
  handleSearchSuccessMessageSelect,
  failedMessageSearch,
  handleFailedMessageSearch,
  handleSubmitFailedMessageSearch,
  failedMessageSearchData,
  handleSearchFailedMessageSelect,
  error
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
          />
          <TextInputWithLabel
            type="text"
            label="Image URL "
            name="image"
            required={true}
            value={image}
            onChange={handleChangeImage}
          />
          <SearchGiphy
            data={messageSearchData}
            search={messageSearch}
            handleChange={handleMessageSearch}
            handleSubmit={handleSubmitMessageSearch}
            handleSelectImg={handleSearchMessageSelect}
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
          />
          <TextInputWithLabel
            type="text"
            label="Success Image URL "
            name="successImage"
            required={true}
            value={successImage}
            onChange={handleChangeSuccessImage}
          />
          <SearchGiphy
            data={successMessageSearchData}
            search={successMessageSearch}
            handleChange={handleSuccessMessageSearch}
            handleSubmit={handleSubmitSuccessMessageSearch}
            handleSelectImg={handleSearchSuccessMessageSelect}
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
          />
          <TextInputWithLabel
            type="text"
            label="Failed Image"
            name="failedImage"
            required={true}
            value={failedImage}
            onChange={handleChangeFailedImage}
          />
          <SearchGiphy
            data={failedMessageSearchData}
            search={failedMessageSearch}
            handleChange={handleFailedMessageSearch}
            handleSubmit={handleSubmitFailedMessageSearch}
            handleSelectImg={handleSearchFailedMessageSelect}
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
              <RadioGroup
                title="Response Effect?"
                radios={responseEffectRadioGroup}
                onChange={handleChangeResponseEffect}
                selected={responseEffect}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {
              error && 
              <div className="gap-4 flex flex-wrap items-center bg-lightpink text-white rounded-lg p-4">
                <div className="w-6 flex">
                  <CIcon icon={cilWarning} />
                </div>
                <div className="flex flex-wrap grow">
                  <Typography>{error}</Typography>
                </div>
              </div>
            }
            
            <Button type="submit">Save Changes</Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default EditInvitationForm;
