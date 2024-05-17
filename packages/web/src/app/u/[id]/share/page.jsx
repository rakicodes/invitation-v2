"use client"
import ShareTemplate from "@ui/templates/ShareTemplate";

const page = ({ params }) => {
	const id = params.id;
  const handleClick = () => {
    navigator.clipboard.writeText(`http://localhost:3000/invitation/${id}`)
  }
	return (
		<>
      <ShareTemplate id={id} handleClick={handleClick} />
    </>
	);
};

export default page;
