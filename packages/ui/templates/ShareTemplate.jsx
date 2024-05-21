import Typography from "../atoms/Typography";
import Button from "../atoms/Button";
import CenterCardContainer from "../templates/container/CenterCardContainer";
import Link from "next/link";

const ShareTemplate = ({ id, handleClick }) => {
  return (
    <CenterCardContainer>
      <div className="bg-white flex flex-col justify-center items-center gap-2 p-10 rounded w-full min-h-screen sm:w-1/2 sm:min-h-0">
        <Typography textCenter>Share the link to invite your friend</Typography>
        <div className="flex border rounded bg-lightpink border-pink py-2 px-4 items-center gap-2 w-full">
          <div className="w-2/3">
            <Typography textCenter>
              <Link className="underline" href={`/invitation/${id}`}>
                http://localhost:3000/invitation/{id}
              </Link>
            </Typography>
          </div>

          <Button onClick={handleClick}>Copy</Button>
        </div>
      </div>
    </CenterCardContainer>
  );
};

export default ShareTemplate;
