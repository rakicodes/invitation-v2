import EditInvitationForm from "../organisms/EditInvitationForm";
import InvitationView from "../organisms/InvitationView";
import InvitationResponseView from "../organisms/InvitationResponseView";
import Typography from "../atoms/Typography";

const EditInvitationTemplate = ({
	message,
	image,
	successMessage,
	successImage,
	failedMessage,
	failedImage,
	recepient,
	responseEffect,
	responseEffectRadioGroup,
	isPublic,
	isPublicRadioGroup,
	backgroundColor,
	fontColor,
	buttonBackgroundColor,
	buttonFontColor,
	handleChangeMessage,
	handleChangeImage,
	handleChangeSuccessMessage,
	handleChangeSuccessImage,
	handleChangeFailedMessage,
	handleChangeFailedImage,
	handleChangeRecepient,
	handleChangeResponseEffect,
	handleChangeIsPublic,
	handleChangeBackgroundColor,
	handleChangeFontColor,
	handleChangeButtonBackgroundColor,
	handleChangeButtonFontColor,
	handleSubmit,
}) => {
	return (
		<div className="flex flex-wrap gap-2 p-2 relative">
			<div className="w-full grow sm:w-1/3">
				<div className="pb-2">
					<Typography
						fontSize="lg"
						textCenter={true}>
						Edit your invitation
					</Typography>
					<Typography
						fontSize="sm"
						textCenter={true}>
						Fill out the fields below
					</Typography>
				</div>
				<EditInvitationForm
					message={message}
					image={image}
					successMessage={successMessage}
					successImage={successImage}
					failedMessage={failedMessage}
					failedImage={failedImage}
					recepient={recepient}
					responseEffect={responseEffect}
					responseEffectRadioGroup={responseEffectRadioGroup}
					isPublic={isPublic}
					isPublicRadioGroup={isPublicRadioGroup}
					backgroundColor={backgroundColor}
					fontColor={fontColor}
					buttonBackgroundColor={buttonBackgroundColor}
					buttonFontColor={buttonFontColor}
					handleChangeMessage={handleChangeMessage}
					handleChangeImage={handleChangeImage}
					handleChangeSuccessMessage={handleChangeSuccessMessage}
					handleChangeSuccessImage={handleChangeSuccessImage}
					handleChangeFailedMessage={handleChangeFailedMessage}
					handleChangeFailedImage={handleChangeFailedImage}
					handleChangeRecepient={handleChangeRecepient}
					handleChangeResponseEffect={handleChangeResponseEffect}
					handleChangeIsPublic={handleChangeIsPublic}
					handleChangeBackgroundColor={handleChangeBackgroundColor}
					handleChangeFontColor={handleChangeFontColor}
					handleChangeButtonBackgroundColor={handleChangeButtonBackgroundColor}
					handleChangeButtonFontColor={handleChangeButtonFontColor}
					handleSubmit={handleSubmit}
				/>
			</div>
			<div className="flex w-full grow self-baseline sm:w-1/3">
				<div className="flex flex-wrap gap-2 sm:pr-2 sm:fixed">
					<div className="w-full">
						<Typography element="h3">Message Preview</Typography>

						<InvitationView
							message={message}
							imgUrl={image}
							imgAlt="Invitation image"
							backgroundColor={backgroundColor}
							fontColor={fontColor}
							buttonBackgroundColor={buttonBackgroundColor}
							buttonFontColor={buttonFontColor}
							responses={["yes", "no"]}
						/>
					</div>
					<div className="w-full grow sm:w-1/3">
						<Typography element="h3">If yes:</Typography>
						<InvitationResponseView
							message={successMessage}
							imgUrl={successImage}
							imgAlt="Invitation image"
							backgroundColor={backgroundColor}
							fontColor={fontColor}
						/>
					</div>
					<div className="w-full grow sm:w-1/3">
						<Typography element="h3">If no:</Typography>
						<InvitationResponseView
							message={failedMessage}
							imgUrl={failedImage}
							imgAlt="Invitation image"
							backgroundColor={backgroundColor}
							fontColor={fontColor}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditInvitationTemplate;
