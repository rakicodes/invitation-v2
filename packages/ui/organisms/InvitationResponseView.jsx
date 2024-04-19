import Image from "../atoms/Image";
import Typography from "../atoms/Typography";
import InvitationContainer from "../templates/container/InvitationContainer";

const InvitationResponseView = ({
  message,
  imgUrl,
  imgAlt,
  backgroundColor,
  fontColor,
}) => {
  return (
    <InvitationContainer backgroundColor={backgroundColor}>
      <Typography fontColor={fontColor} textCenter={true}>{message}</Typography>
      <Image url={imgUrl} alt={imgAlt} />
    </InvitationContainer>
  );
};

export default InvitationResponseView;
