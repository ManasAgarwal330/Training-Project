import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

const Footer: FC<Props> = (props) => {
  return (
    <>
      <p className={props.className}>
        © 2020 All Rights Reserved.
        <Link to="/">
          <span className="text-sm font-display text-primary">CORK</span>
        </Link>{" "}
        is a product of Designreset.{" "}
        <Link to="/">
          <span className="text-sm font-display text-primary">
            {" "}
            Cookie Preferences, Privacy,
          </span>
        </Link>{" "}
        and{" "}
        <Link to="/">
          <span className="text-sm font-display text-primary">Terms.</span>
        </Link>
      </p>
    </>
  );
};

export default memo(Footer);
