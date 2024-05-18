import Image from "../atoms/Image";
import Typography from "../atoms/Typography";
import InvitationContainer from "../templates/container/InvitationContainer";

const InvitationResponseView = ({
  message,
  imgUrl,
  imgAlt,
  backgroundColor,
  fontColor,
  screen=false
}) => {
  return (
    <InvitationContainer backgroundColor={backgroundColor} screen={screen}>
      <Typography fontColor={fontColor} textCenter={true} fontSize="lg">
        {message}
      </Typography>
      <Image url={imgUrl} alt={imgAlt} />
    </InvitationContainer>
  );
};

export default InvitationResponseView;
