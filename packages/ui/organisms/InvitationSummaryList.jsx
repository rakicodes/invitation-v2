import InvitationSummary from "../molecules/InvitationSummary";

const InvitationSummaryList = ({ data, handleDelete }) => {
  return (
    <table className="table-fixed w-full border-separate border-spacing-y-3">
      <thead>
        <tr>
          <th className="md:w-1/2 text-left pl-4 truncate">Message</th>
          <th className="text-right truncate">Recepient</th>
          <th className="text-right truncate">Response</th>
          <th className="text-right pr-4 truncate">Options</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i} className="bg-lightpink">
            <InvitationSummary
              message={d.message}
              recepient={d.recepient}
              response={d.response}
              id={d._id}
              handleDelete={handleDelete}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvitationSummaryList;
