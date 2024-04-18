import Image from "../atoms/Image";
import Paragraph from "../atoms/Paragraph";
import Container from "../atoms/Container";

const InvitationResponseView = ({
  message,
  imgUrl,
  imgAlt,
  backgroundColor,
  fontColor,
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Paragraph fontColor={fontColor}>{message}</Paragraph>
      <Image url={imgUrl} alt={imgAlt} />
    </Container>
  );
};

export default InvitationResponseView;
