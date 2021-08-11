import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, memo } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiChip, BiCube } from "react-icons/bi";
import ListItem from "./ListItem/ListItem";

interface Props {
  open: boolean;
  setOpen: (value: false) => void;
}

const SideBar: FC<Props> = ({ open }) => {
  return (
    <>
      <Transition.Root show={open}>
        <Transition.Child
          enter="ease-in-out duration-1000 transform transition-all"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in-out duration-1000 transform transition-all"
          leaveFrom="translate-0"
          leaveTo="-translate-x-full"
        >
          <div className="w-56 h-screen bg-grayLightest absolute left-0">
            <ul className="flex-col mt-9 px-2">
              <ListItem title="Dashboard" Icon={AiOutlineHome} isArrow={true} />
              <ListItem title="Apps" Icon={BiChip} isArrow={true} />
              <ListItem title="Component" Icon={BiCube} />
            </ul>
          </div>
        </Transition.Child>
      </Transition.Root>
    </>
  );
};

export const SidebarSmall: FC<Props> = ({ open, setOpen }) => {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog open={open} onClose={setOpen}>
          <Transition.Child
            enter="ease-in-out duration-1000 transition-opacity"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            entered="opacity-30"
            leave="ease-in-out duration-1000 transition-opacity"
            leaveFrom="opacity-30"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-gray-400 absolute inset-0 z-30" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transform transition-all duration-500 ease-in-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in-out duration-1000 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="w-56 bg-grayLightest fixed left-0 top-0 bottom-0">
              <ul className="flex-col mt-9 px-2">
                <ListItem
                  title="Dashboard"
                  Icon={AiOutlineHome}
                  isArrow={true}
                />
                <ListItem title="Apps" Icon={BiChip} isArrow={true} />
                <ListItem title="Component" Icon={BiCube} />
              </ul>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default memo(SideBar);
