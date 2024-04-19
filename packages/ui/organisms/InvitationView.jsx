import Image from "../atoms/Image";
import Typography from "../atoms/Typography";
import ButtonGroup from "../molecules/ButtonGroup";
import Container from "../atoms/Container";

const InvitationView = ({
  message,
  imgUrl,
  imgAlt,
  responses,
  backgroundColor,
  fontColor,
  buttonBackgroundColor,
  buttonFontColor,
  screen
}) => {
  return (
    <Container backgroundColor={backgroundColor} screen={screen}>
      <Typography fontColor={fontColor} textCenter={true}>{message}</Typography>
      <Image url={imgUrl} alt={imgAlt} />
      <ButtonGroup
        texts={responses}
        backgroundColor={buttonBackgroundColor}
        fontColor={buttonFontColor}
        fullWidth={false}
      />
    </Container>
  );
};

export default InvitationView;
