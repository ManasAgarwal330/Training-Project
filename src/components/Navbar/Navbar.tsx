import { FC, memo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import NavbarSearchSection from "./NavbarSearchSection";
import Profile from "../Profile";

interface Props {}

const Navbar: FC<Props> = (props) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <>
      <NavbarSearchSection open={openNavbar} setOpen={setOpenNavbar} />
      <div className="bg-blueDark p-1 py-2 h-12 w-full flex items-center font-display sticky top-0 z-20 mx-0 my-0 box-border">
        <div className="flex items-center md:flex-grow lg:flex-grow-0">
          <img
            src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg"
            alt="cork logo"
            className="w-8 h-8"
          />
          <h1 className="mx-6 text-3xl font-extrabold text-white hidden md:block">
            CORK
          </h1>
        </div>
        <div className="flex justify-end items-center min-w-100 flex-grow md:flex-grow-0">
          <div className="flex bg-blueDarkLight rounded-md items-center">
            <BsSearch className="w-5 h-5 mr-2 hidden md:block text-gray-500 ml-1" />
            <input
              type="text"
              className="hidden md:block w-full mr-2 ml-0
               outline-none border-none py-1 text-gray-500 bg-blueDarkLight pl-0 min-w-370"
              placeholder="Search"
            />
          </div>
          <button onClick={() => setOpenNavbar(true)}>
            <BsSearch className="w-5 h-5 text-white mr-2 md:hidden" />
          </button>
        </div>
        <div className="flex items-center md:flex-grow justify-end">
          <div className="px-2">
            <AiOutlineMail className="h-7 w-7 text-white" />
          </div>
          <div className="px-2">
            <AiOutlineBell className="h-7 w-7 text-white" />
          </div>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
