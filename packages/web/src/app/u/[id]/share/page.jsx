"use client"
import ShareTemplate from "@ui/templates/ShareTemplate";

const page = ({ params }) => {
	const id = params.id;
  const handleClick = () => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_CLIENT_URL}/invitation/${id}`)
  }
	return (
		<>
      <ShareTemplate id={id} handleClick={handleClick} />
    </>
	);
};

export default page;
