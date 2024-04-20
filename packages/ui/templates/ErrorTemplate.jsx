import Typography from "../atoms/Typography";
import Button from "../atoms/Button";
import CenterCardContainer from "./container/CenterCardContainer";

const ErrorTemplate = ({ onClick, message="Sorry something went wrong", page="Home" }) => {
	return (
		<CenterCardContainer>
			<div className="bg-white flex flex-col justify-center items-center gap-2 p-10 rounded w-full min-h-screen sm:w-1/2 sm:min-h-0">
				<Typography
					textCenter={true}
					fontSize="lg">
					Oops!
				</Typography>
				<Typography textCenter={true}>{message}</Typography>
				<div className="pt-4 sm:w-1/2">
					<Button onClick={onClick}>Back to {page}</Button>
				</div>
			</div>
		</CenterCardContainer>
	);
};

export default ErrorTemplate;
