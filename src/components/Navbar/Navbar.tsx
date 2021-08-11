import { FC, memo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import NavbarSearchSection from "./NavbarSearchSection";

interface Props {}

const Navbar: FC<Props> = (props) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <>
      <NavbarSearchSection open={openNavbar} setOpen={setOpenNavbar} />
      <div className="bg-blueDark p-1 h-12 w-full flex items-center font-display sticky top-0 z-10">
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
          <div className="px-2">
            <img
              src="data:image/jpeg;base64,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"
              alt="Profile"
              className="h-7 w-7 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
