import ResponseTemplate from "@ui/templates/ResponseTemplate";

const page = async ({ params }) => {
	const id = params.id;
	const res = await fetch(`http://localhost:3333/api/invitations/${id}`);
	const data = await res.json();

	return (
		<>
			<ResponseTemplate
				message={data.failedMessage}
				imgUrl={data.failedImage}
				imgAlt="Image Success"
				backgroundColor={data.backgroundColor}
				fontColor={data.fontColor}
			/>
		</>
	);
};

export default page;