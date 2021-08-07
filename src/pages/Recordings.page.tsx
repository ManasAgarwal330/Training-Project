import { FC, memo } from "react";
import { Link, useParams } from "react-router-dom";

interface Props {};

interface RouteParams{
    lectureNumber:string;
    batchNumber:string;
}

const Recordings: FC<Props> = (props) => {
  const {lectureNumber,batchNumber} = useParams<RouteParams>();
  return (
    <>
      <div>This is Recordings Page.</div>
      <div>
        <Link to="/dashboard">
          <span className="text-blue-500">Go To Dashboard Page.</span>
        </Link>
      </div>
    </>
  );
};

export default memo(Recordings);
