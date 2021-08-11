import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGroup } from "../api";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  useEffect(() => {
    fetchGroup({ status: "all-groups" });
  }, []);
  return (
    <>
      <div>This is dashboard page.</div>
      <div>
        <Link to="/recordings/1/2">
          <span className="text-blue-500">Go To Recordings Page.</span>
        </Link>
      </div>
    </>
  );
};

export default memo(Dashboard);
