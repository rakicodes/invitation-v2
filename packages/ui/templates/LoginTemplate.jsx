import LoginForm from "../organisms/LoginForm";
import FormContainer from "../atoms/FormContainer";

const LoginTemplate = ({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit,
}) => {
  return (
    <FormContainer>
      <LoginForm
        email={email}
        password={password}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleSubmit={handleSubmit}
      />
    </FormContainer>
  );
};

export default LoginTemplate;
