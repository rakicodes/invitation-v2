import LoginForm from "../organisms/LoginForm"

const LoginTemplate = ({ email, password, handleChangeEmail, handleChangePassword, handleSubmit }) => {
  return (
    <>
      <LoginForm 
        email={email}
        password={password}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default LoginTemplate