import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Login: FC<Props> = (props) => {
  return (
    <>
      <div className="flex-grow">
        This is Login Page.
        <div>
          <Link to="/signup">
            <span className="text-blue-500">New Here? Go to SignUp Page?</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(Login);
