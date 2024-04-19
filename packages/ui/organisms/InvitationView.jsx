import Image from "../atoms/Image";
import Paragraph from "../atoms/Paragraph";
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
      <Paragraph fontColor={fontColor} textCenter={true}>{message}</Paragraph>
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
