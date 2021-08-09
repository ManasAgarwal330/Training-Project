import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  return (
    <>
      <div>This is dashboard page.</div>
      <div>
        <Link to="/recordings">
          <span className="text-blue-500">Go To Recordings Page.</span>
        </Link>
      </div>
    </>
  );
};

export default memo(Dashboard);
