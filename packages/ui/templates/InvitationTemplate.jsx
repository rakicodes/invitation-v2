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
    <div className="min-h-screen">
      <InvitationView
        message={message}
        imgUrl={imgUrl}
        imgAlt={imgAlt}
        responses={responses}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        buttonBackgroundColor={buttonBackgroundColor}
        buttonFontColor={buttonFontColor}
        screen={true}
      />
    </div>
  );
};

export default InvitationTemplate;
