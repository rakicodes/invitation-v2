import CreateInvitationForm from "../organisms/CreateInvitationForm";
import InvitationView from "../organisms/InvitationView";
import InvitationResponseView from "../organisms/InvitationResponseView";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";

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
  step,
  handleStep,
}) => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="flex flex-wrap gap-2 p-2 relative max-w-4xl">
        <div className="w-full pb-2">
          <Typography fontSize="lg" textCenter={true}>
            Create your invitation
          </Typography>
          <Typography fontSize="sm" textCenter={true}>
            Fill out the fields below
          </Typography>
        </div>
        <div className="w-full grow sm:w-1/3 min-h-[488px]">
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
            handleChangeButtonBackgroundColor={
              handleChangeButtonBackgroundColor
            }
            handleChangeButtonFontColor={handleChangeButtonFontColor}
            handleSubmit={handleSubmit}
            preview={preview}
            step={step}
          />
        </div>
        <div className="flex w-full grow self-stretch sm:w-1/3 min-h-[488px]">
          <div className="flex flex-wrap w-1/2 gap-2 w-full grow">
            <div className="w-full">
              {step === 0 && (
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
                  full={true}
                />
              )}
              {step === 1 && (
                <InvitationResponseView
                  message={
                    successMessage ? successMessage : preview.successMessage
                  }
                  imgUrl={successImage ? successImage : preview.successImage}
                  imgAlt="Invitation image"
                  backgroundColor={
                    backgroundColor ? backgroundColor : preview.backgroundColor
                  }
                  fontColor={fontColor ? fontColor : preview.fontColor}
                  full={true}
                />
              )}
              {step === 2 && (
                <InvitationResponseView
                  message={
                    failedMessage ? failedMessage : preview.failedMessage
                  }
                  imgUrl={failedImage ? failedImage : preview.failedImage}
                  imgAlt="Invitation image"
                  backgroundColor={
                    backgroundColor ? backgroundColor : preview.backgroundColor
                  }
                  fontColor={fontColor ? fontColor : preview.fontColor}
                  full={true}
                />
              )}
              {step === 3 && (
                <div className="flex flex-col gap-2">
                  <InvitationView
                    message={message ? message : preview.message}
                    imgUrl={image ? image : preview.messageImage}
                    imgAlt="Invitation image"
                    backgroundColor={
                      backgroundColor
                        ? backgroundColor
                        : preview.backgroundColor
                    }
                    fontColor={fontColor ? fontColor : preview.fontColor}
                    buttonBackgroundColor={
                      buttonBackgroundColor
                        ? buttonBackgroundColor
                        : preview.buttonBackgroundColor
                    }
                    buttonFontColor={
                      buttonFontColor
                        ? buttonFontColor
                        : preview.buttonFontColor
                    }
                    responses={["yes", "no"]}
                    screen={false}
                  />
                  <div className="flex gap-x-2">
                    <div className="w-1/2 grow self-stretch">
                      <InvitationResponseView
                        message={
                          successMessage
                            ? successMessage
                            : preview.successMessage
                        }
                        imgUrl={
                          successImage ? successImage : preview.successImage
                        }
                        imgAlt="Invitation image"
                        backgroundColor={
                          backgroundColor
                            ? backgroundColor
                            : preview.backgroundColor
                        }
                        fontColor={fontColor ? fontColor : preview.fontColor}
                        screen={false}
                        full={true}
                      />
                    </div>
                    <div className="w-1/2 grow self-stretch">
                      <InvitationResponseView
                        message={
                          failedMessage ? failedMessage : preview.failedMessage
                        }
                        imgUrl={failedImage ? failedImage : preview.failedImage}
                        imgAlt="Invitation image"
                        backgroundColor={
                          backgroundColor
                            ? backgroundColor
                            : preview.backgroundColor
                        }
                        fontColor={fontColor ? fontColor : preview.fontColor}
                        screen={false}
                        full={true}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex gap-2 items-center justify-between">
          <div>
            {step > 0 ? (
              <Button onClick={() => handleStep(-1)}>Prev</Button>
            ) : (
              <Button disabled={true} backgroundColor="#f3ccd9">
                Prev
              </Button>
            )}
          </div>
          <div>
            <Typography>{step + 1} / 4</Typography>
          </div>
          <div>
            {step < 3 ? (
              <Button onClick={() => handleStep(1)}>Next</Button>
            ) : (
              <Button disabled={true} backgroundColor="#f3ccd9">
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvitationTemplate;
