import Image from "../atoms/Image";
import Typography from "../atoms/Typography";
import ButtonGroup from "../molecules/ButtonGroup";
import InvitationContainer from "../templates/container/InvitationContainer";

const InvitationView = ({
  message,
  imgUrl,
  imgAlt,
  responses,
  backgroundColor,
  fontColor,
  buttonBackgroundColor,
  buttonFontColor,
  screen,
}) => {
  return (
    <InvitationContainer backgroundColor={backgroundColor} screen={screen}>
      <Typography fontColor={fontColor} textCenter={true} fontSize="lg">
        {message}
      </Typography>
      <Image url={imgUrl} alt={imgAlt} />
      <ButtonGroup
        texts={responses}
        backgroundColor={buttonBackgroundColor}
        fontColor={buttonFontColor}
        fullWidth={false}
      />
    </InvitationContainer>
  );
};

export default InvitationView;
