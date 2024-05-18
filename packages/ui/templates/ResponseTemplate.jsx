import InvitationResponseView from "../organisms/InvitationResponseView";

const ResponseTemplate = ({
	message,
	imgUrl,
	imgAlt,
	backgroundColor,
	fontColor,
}) => {
	return (
		<div className="min-h-screen">
			<InvitationResponseView
				message={message}
				imgUrl={imgUrl}
				imgAlt={imgAlt}
				backgroundColor={backgroundColor}
				fontColor={fontColor}
                screen={true}
			/>
		</div>
	);
};

export default ResponseTemplate;
