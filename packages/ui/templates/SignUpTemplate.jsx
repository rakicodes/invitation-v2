import SignUpForm from "../organisms/SignUpForm";
import FormContainer from "../atoms/FormContainer";

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
    <FormContainer>
      <SignUpForm
        name={name}
        email={email}
        password={password}
        handleChangeName={handleChangeName}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleSubmit={handleSubmit}
      />
    </FormContainer>
  );
};

export default SignUpTemplate;
