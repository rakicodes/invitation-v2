import Link from 'next/link'
import LoginForm from "../organisms/LoginForm";
import FormContainer from "../atoms/FormContainer";
import Typography from "../atoms/Typography";

const LoginTemplate = ({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit,
}) => {
  return (
    <FormContainer>
      <Typography element="h1">Log in</Typography>
      <LoginForm
        email={email}
        password={password}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleSubmit={handleSubmit}
      />
      <Typography>Don't have an account? <Link href="/signup">Sign up</Link></Typography>
    </FormContainer>
  );
};

export default LoginTemplate;
