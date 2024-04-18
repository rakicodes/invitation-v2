import SignUpForm from "../organisms/SignUpForm"

const SignUpTemplate = ({ name, email, password, handleChangeName, handleChangeEmail, handleChangePassword, handleSubmit }) => {
  return (
    <>
      <SignUpForm 
        name={name}
        email={email}
        password={password}
        handleChangeName={handleChangeName}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleSubmit={handleSubmit}
      />
    </> 
  )
}

export default SignUpTemplate