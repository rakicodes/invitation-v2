import Image from "../atoms/Image";
import Typography from "../atoms/Typography";
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
      <Typography fontColor={fontColor} textCenter={true}>{message}</Typography>
      <Image url={imgUrl} alt={imgAlt} />
    </Container>
  );
};

export default InvitationResponseView;
