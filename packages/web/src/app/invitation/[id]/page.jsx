import InvitationTemplate from "@ui/templates/InvitationTemplate";
import { redirect } from 'next/navigation'

const Page = async ({ params }) => {
	const res = await fetch(
		`http://localhost:3333/api/invitations/${params.id}`
	);
	const data = await res.json();

	
	return (
		<>
			<InvitationTemplate
				message={data.message}
				imgUrl={data.messageImage}
				imgAlt="Invitation image"
				backgroundColor={data.backgroundColor}
				fontColor={data.fontColor}
				buttonBackgroundColor={data.buttonBackgroundColor}
				buttonFontColor={data.buttonFontColor}
				responses={["yes", "no"]}
				isEffect={[false, data.responseEffect]}
			/>
		</>
	);
}

export default Page;
