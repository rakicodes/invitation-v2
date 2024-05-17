"use client"
import { useEffect, useState } from "react"
import InvitationTemplate from "@ui/templates/InvitationTemplate";

const Page = ({ params }) => {
	const id = params.id
	const [data, setData] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`http://localhost:3333/api/invitations/${id}`
				);
				const data = await res.json();

				setData(data);
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, [id]);

	const handleNo = async () => {
		console.log("no")
		const res = await fetch(`http://localhost:3333/api/invitations/reply/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				response: "no"
			}),
		});
	}

	const handleYes = async () => {
		console.log("yes")
		const res = await fetch(`http://localhost:3333/api/invitations/reply/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				response: "yes"
			}),
		});
	}

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
				handleResponses={[handleYes, handleNo]}
			/>
		</>
	);
}

export default Page;
