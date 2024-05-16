import InvitationView from "../organisms/InvitationView";
import Link from "next/link"
const HomeTemplate = ({ invitations }) => {
	return (
		<div className="flex flex-wrap gap-2 p-5">
			{invitations.map((invitation) => (
				<div className="xs:w-full sm:w-1/3 md:w-1/4 grow">
					<Link href={`/u/invitation/${invitation._id}`}>
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
							full={true}
						/>
					</Link>
				</div>
			))}
		</div>
	);
};

export default HomeTemplate;
