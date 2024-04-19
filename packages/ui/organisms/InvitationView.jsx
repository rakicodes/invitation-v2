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
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Paragraph fontColor={fontColor}>{message}</Paragraph>
      <Image url={imgUrl} alt={imgAlt} />
      <ButtonGroup
        texts={responses}
        backgroundColor={buttonBackgroundColor}
        fontColor={buttonFontColor}
      />
    </Container>
  );
};

export default InvitationView;