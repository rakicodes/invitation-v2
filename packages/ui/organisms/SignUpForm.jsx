import Button from "../atoms/Button";
import TextInputWithLabel from "../molecules/TextInputWithLabel";

const SignUpForm = ({
  name,
  email,
  password,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit,
}) => {
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <TextInputWithLabel
        type="text"
        label="Name"
        name="name"
        required={true}
        value={name}
        onChange={handleChangeName}
      />
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
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
