import { Transition } from "@headlessui/react";
import { FC, memo } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiChip, BiCube } from "react-icons/bi";

interface Props {
  open: boolean;
  setOpen: (value: false) => void;
}

const SideBar: FC<Props> = ({ open, setOpen }) => {
  return (
    <>
      <Transition.Root show={open}>
        <Transition.Child
          enter="ease-in-out duration-500 transform transition-all"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in-out duration-500 transform transition-all"
          leaveFrom="translate-0"
          leaveTo="-translate-x-full"
        >
          <div className="w-52 h-screen bg-grayLightest absolute left-0">
            <ul className="flex-col mt-9 px-2">
              <li
                className="flex items-center mb-2 w-full transition-all duration-500 
              ease-in-out hover:bg-gray-300 hover:shadow-md py-2 rounded-md px-1 cursor-pointer"
              >
                <AiOutlineHome className="h-5 w-5 text-primaryDark mr-2" />
                <span className="text-black text-lg font-display">
                  Dashboard
                </span>
              </li>
              <li className="flex items-center mb-2 w-full transition-all duration-500 
              ease-in-out hover:bg-gray-300 hover:shadow-md py-2 rounded-md px-1">
                <BiChip className="h-5 w-5 text-primaryDark mr-2 cursor-pointer" />
                <span className="text-black text-lg font-display">Apps</span>
              </li>
              <li className="flex items-center mb-2 w-full transition-all duration-500 
              ease-in-out hover:bg-gray-300 hover:shadow-md py-2 rounded-md px-1 cursor-pointer">
                <BiCube className="h-5 w-5 text-primaryDark mr-2" />
                <span className="text-black text-lg font-display">
                  Components
                </span>
              </li>
            </ul>
          </div>
        </Transition.Child>
      </Transition.Root>
    </>
  );
};

export default memo(SideBar);
