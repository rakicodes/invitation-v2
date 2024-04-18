import Button from "../atoms/Button";
import TextInputWithLabel from "../molecules/TextInputWithLabel";

const LoginForm = ({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit,
}) => {
  return (
    <>
      <TextInputWithLabel
        type="email"
        label="Email"
        name="email"
        required={true}
        value={email}
        onChange={handleChangeEmail}
      />
      <TextInputWithLabel
        type="password"
        label="Password"
        name="password"
        required={true}
        value={password}
        onChange={handleChangePassword}
      />
      <Button type="submit" onClick={handleSubmit}>
        Log In
      </Button>
    </>
  );
};

export default LoginForm;
