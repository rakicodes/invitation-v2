import Link from "next/link";
import LoginForm from "../organisms/LoginForm";
import FormContainer from "./container/FormContainer";
import Typography from "../atoms/Typography";
import CenterCardContainer from "./container/CenterCardContainer";

const LoginTemplate = ({
	email,
	password,
	handleChangeEmail,
	handleChangePassword,
	handleSubmit,
}) => {
	return (
		<CenterCardContainer>
			<FormContainer>
				<div className="pb-2">
					<Typography element="h1" fontSize="lg" textCenter={true}>Welcome Back</Typography>
					<Typography fontSize="sm" textCenter={true}>Need to send an invitation? Log in to your account!</Typography>
				</div>
				<LoginForm
					email={email}
					password={password}
					handleChangeEmail={handleChangeEmail}
					handleChangePassword={handleChangePassword}
					handleSubmit={handleSubmit}
				/>
				<Typography textCenter={true} fontSize="sm">
					Don't have an account? <Link href="/signup" className="text-pink hover:underline">Sign up</Link>
				</Typography>
			</FormContainer>
		</CenterCardContainer>
	);
};

export default LoginTemplate;
