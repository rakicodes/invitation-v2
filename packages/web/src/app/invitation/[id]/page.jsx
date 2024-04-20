import InvitationTemplate from "@ui/templates/InvitationTemplate";
import { cookies } from "next/headers";

const Page = async ({ params }) => {
	const res = await fetch(
		`http://localhost:3333/api/invitations/${params.id}`,
		{
			headers: {
				Authorization: `Bearer ${JSON.parse(cookies().get('session').value).token}`,
			},
		}
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
			/>
		</>
	);
}

export default Page;
