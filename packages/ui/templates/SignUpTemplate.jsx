import Link from "next/link";
import SignUpForm from "../organisms/SignUpForm";
import FormContainer from "./container/FormContainer";
import Typography from "../atoms/Typography";
import CenterCardContainer from "./container/CenterCardContainer";

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
        <div className="pb-2">
          <Typography element="h1" fontSize="lg" textCenter={true}>
            Create an account
          </Typography>
          <Typography fontSize="sm" textCenter={true}>
            Get started and send your first invitation!
          </Typography>
        </div>
        <SignUpForm
          name={name}
          email={email}
          password={password}
          handleChangeName={handleChangeName}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          handleSubmit={handleSubmit}
        />
        <Typography textCenter={true} fontSize="sm">
          Already have an account?{" "}
          <Link href="/login" className="text-pink hover:underline">
            Log in
          </Link>
        </Typography>
      </FormContainer>
    </CenterCardContainer>
  );
};

export default SignUpTemplate;
