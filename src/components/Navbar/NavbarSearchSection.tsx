import { FC, Fragment, memo } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  open: boolean;
  setOpen: (open: false) => void;
}

const NavbarSearchSection: FC<Props> = ({ open, setOpen }) => {
  return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog open={open} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transform transition-all duration-500 ease-in-out"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          entered="translate-y-0"
          leave = "transform transition-all duration-500 ease-in-out"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
        >
            <div className="bg-blueDark px-2 h-12 box-border w-full  flex items-center overflow-hidden font-display absolute top-0 left-0 right-0 z-20">
              <div className="flex items-center mt-1 w-full">
                <BsSearch className="w-5 h-5 mr-2 text-gray-500 ml-2" />
                <input
                  type="text"
                  className=" text-gray-500 text-lg w-full bg-blueDarkLight rounded-md py-1 px-4 mr-2 outline-none"
                  placeholder="Search"
                />
              </div>
            </div>
          </Transition.Child>
          <Dialog.Overlay className="h-screen w-screen" />
        </Dialog>
      </Transition.Root>
  );
};

export default memo(NavbarSearchSection);
