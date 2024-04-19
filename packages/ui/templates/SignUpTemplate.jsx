import Link from "next/link";
import SignUpForm from "../organisms/SignUpForm";
import FormContainer from "./container/FormContainer";
import Typography from "../atoms/Typography";
import CenterCardContainer from "./container/CenterCardContainer"

const SignUpTemplate = ({
	name,
	email,
	password,
	handleChangeName,
	handleChangeEmail,
	handleChangePassword,
	handleSubmit,
}) => {
	return (
		<CenterCardContainer>
			<FormContainer>
				<Typography element="h1">Create an account</Typography>
				<Typography>Get started and send your first invitation!</Typography>
				<SignUpForm
					name={name}
					email={email}
					password={password}
					handleChangeName={handleChangeName}
					handleChangeEmail={handleChangeEmail}
					handleChangePassword={handleChangePassword}
					handleSubmit={handleSubmit}
				/>
				<Typography>
					Already have an account? <Link href="/login">Log in</Link>
				</Typography>
			</FormContainer>
		</CenterCardContainer>
	);
};

export default SignUpTemplate;
