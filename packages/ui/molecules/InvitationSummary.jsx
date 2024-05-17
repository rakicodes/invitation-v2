import Typography from "../atoms/Typography"
import Link from "next/link"

const InvitationSummary = ({ message, recepient, response, id }) => {
  return (
    <>
        <td className="rounded-l pl-4 py-4"><Typography>{message}</Typography></td>
        <td className="py-4 text-right"><Typography>{recepient}</Typography></td>
        <td className="py-4 text-right"><Typography>{response}</Typography></td>
        <td className="rounded-r py-4 pr-4 text-right"><Link className="hover:text-green" href={`/invitation/${id}`} target="_blank">Link</Link></td>
    </>
  )
}

export default InvitationSummary