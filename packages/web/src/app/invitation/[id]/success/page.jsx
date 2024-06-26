import ResponseTemplate from "@ui/templates/ResponseTemplate";

const page = async ({ params }) => {
	const id = params.id;
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/invitations/${id}`);
	const data = await res.json();

	return (
		<>
			<ResponseTemplate
				message={data.successMessage}
				imgUrl={data.successImage}
				imgAlt="Image Failed"
				backgroundColor={data.backgroundColor}
				fontColor={data.fontColor}
			/>
		</>
	);
};

export default page;
