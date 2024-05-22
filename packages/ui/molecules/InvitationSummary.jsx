import Typography from "../atoms/Typography";
import Link from "next/link";
import { MdEdit, MdDeleteOutline } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

const InvitationSummary = ({
  message,
  recepient,
  response,
  id,
  handleDelete,
}) => {
  return (
    <>
      <td className="rounded-l pl-4 py-4">
        <Typography>{message}</Typography>
      </td>
      <td className="py-4 text-right">
        <Typography>{recepient}</Typography>
      </td>
      <td className="py-4 text-right">
        <Typography>{response}</Typography>
      </td>
      <td className="rounded-r py-4 pr-4 text-right">
        <div className="flex gap-2 justify-end">
          <Link
            className="hover:text-green"
            href={`/invitation/${id}`}
            target="_blank"
          >
            <FaExternalLinkAlt />
          </Link>
          <Link
            className="hover:text-green"
            href={`/u/${id}/edit`}
            target="_blank"
          >
            <MdEdit />
          </Link>
          <div
            onClick={() => handleDelete(id)}
            className="hover:text-green cursor-pointer"
          >
            <MdDeleteOutline />
          </div>
        </div>
      </td>
    </>
  );
};

export default InvitationSummary;
