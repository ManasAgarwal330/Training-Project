import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {}

const SignUp: FC<Props> = (props) => {
  return (
    <>
      <div className="flex-grow">
        This is SignUp page.
        <div>
          <Link to="/login">
            <span className="text-blue-500">Go To Login Page.</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(SignUp);
