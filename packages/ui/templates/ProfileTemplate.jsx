import InvitationSummaryList from "../organisms/InvitationSummaryList";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";
import LoadingTemplate from "@ui/templates/LoadingTemplate";


const ProfileTemplate = ({ data, handleDelete, handleCreate, isLoading }) => {
  return (
    <div className="bg-white flex justify-center min-h-screen">
      <div className="flex flex-col gap-5 px-6 py-3 text-black max-w-4xl w-full">
        <div className="flex flex-wrap w-full gap-2">
          <div className="grow">
            <Typography fontSize="lg">Create a new invitation</Typography>
          </div>
          <div className="sm:w-1/6">
            <Button onClick={handleCreate}>+</Button>
          </div>
        </div>
        <div className="h-full">
        {
          isLoading ? <LoadingTemplate screen={false} /> :
          <>
            <Typography element="h1" fontSize="lg">
              Invitation Status
            </Typography>
            <InvitationSummaryList data={data} handleDelete={handleDelete} />
          </>
        }
        </div>
      </div>
    </div>
  );
};

export default ProfileTemplate;
