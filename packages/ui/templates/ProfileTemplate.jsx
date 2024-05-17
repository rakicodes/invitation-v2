import InvitationSummaryList from "../organisms/InvitationSummaryList"
import Typography from "../atoms/Typography"

const ProfileTemplate = ({ data }) => {
  return (
    <div className="bg-white flex flex-col gap-5 px-6 py-3 min-h-screen text-black">
        <Typography element="h1" fontSize="lg">Invitation Status</Typography>
        <InvitationSummaryList data={data}/>
    </div>
  )
}

export default ProfileTemplate