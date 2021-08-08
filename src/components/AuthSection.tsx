import { FC, memo } from "react";

interface Props {}

const AuthSection: FC<Props> = (props) => {
  return (
    <>
      <div className="bg-black hidden lg:block  px-20">
        <div className="flex items-center h-full">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default memo(AuthSection);
