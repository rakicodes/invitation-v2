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
  full,
  btnPos,
  isEffect,
  handleMouseover
}) => {
  return (
    <InvitationContainer backgroundColor={backgroundColor} screen={screen} full={full}>
      <Typography fontColor={fontColor} textCenter={true} fontSize="lg">
        {message}
      </Typography>
      <Image url={imgUrl} alt={imgAlt} />
      <ButtonGroup
        texts={responses}
        backgroundColor={buttonBackgroundColor}
        fontColor={buttonFontColor}
        fullWidth={false}
        btnPos={btnPos}
        isEffect={isEffect}
        handleMouseover={handleMouseover}
      />
    </InvitationContainer>
  );
};

export default InvitationView;
