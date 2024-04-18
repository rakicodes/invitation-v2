import InvitationTemplate from "@ui/templates/InvitationTemplate"
import data from "@/app/data"
const page = () => {
  return (
    <>
      <InvitationTemplate 
        message={data.message}
        imgUrl={data.messageImage}
        imgAlt="Invitation image"
        backgroundColor={data.backgroundColor}
        fontColor={data.fontColor}
        buttonBackgroundColor={data.buttonBackgroundColor}
        buttonFontColor={data.buttonFontColor}
        responses={["yes","no"]}
      />
    </>
  )
}

export default page