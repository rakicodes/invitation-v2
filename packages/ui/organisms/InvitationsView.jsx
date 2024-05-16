const InvitationsView = ({ invitations }) => {
	return (
		<div className="flex flex-wrap">
			<div className="width-1/3">
				<InvitationView
					message={invitation.message}
					imgUrl={invitation.messageImage}
					imgAlt="Invitation image"
					responses={["yes", "no"]}
					backgroundColor={invitation.backgroundColor}
					fontColor={invitation.fontColor}
					buttonBackgroundColor={invitation.buttonBackgroundColor}
					buttonFontColor={invitation.buttonFontColor}
					screen={false}
				/>
			</div>
		</div>
	);
};

export default InvitationsView;
