import InvitationView from "../organisms/InvitationView";

const InvitationTemplate = ({
  message,
  imgUrl,
  imgAlt,
  responses,
  backgroundColor,
  fontColor,
  buttonBackgroundColor,
  buttonFontColor,
}) => {
  return (
    <>
      <InvitationView
        message={message}
        imgUrl={imgUrl}
        imgAlt={imgAlt}
        responses={responses}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        buttonBackgroundColor={buttonBackgroundColor}
        buttonFontColor={buttonFontColor}
      />
    </>
  );
};

export default InvitationTemplate;
