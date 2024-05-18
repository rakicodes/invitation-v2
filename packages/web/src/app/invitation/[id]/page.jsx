"use client"
import { useEffect, useState } from "react"
import InvitationTemplate from "@ui/templates/InvitationTemplate";
import { useRouter } from "next/navigation"

const Page = ({ params }) => {
	const id = params.id
	const [data, setData] = useState({})
	const router = useRouter()

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
		const res = await fetch(`http://localhost:3333/api/invitations/reply/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				response: "no"
			}),
		});
		router.push(`/invitation/${id}/reject`)
	}

	const handleYes = async () => {
		const res = await fetch(`http://localhost:3333/api/invitations/reply/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				response: "yes"
			}),
		});
		router.push(`/invitation/${id}/success`)
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
