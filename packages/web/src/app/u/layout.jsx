import Header from "@ui/organisms/Header"

const layout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default layout