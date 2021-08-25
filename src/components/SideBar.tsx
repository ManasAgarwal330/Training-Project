import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, memo } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiChip, BiCube } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { uiSmallSidebarToggle } from "../store";
import ListItem from "./ListItem/ListItem";

interface Props {
  open: boolean;
}

const SideBar: FC<Props> = ({ open }) => {

  return (
    <Transition show={open}>
      <Transition.Child
        enter="ease-in-out duration-1000 transform transition-all"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="ease-in-out duration-1000 transform transition-all"
        leaveFrom="translate-0"
        leaveTo="-translate-x-full"
        as={Fragment}
      >
        <div className="w-56 fixed left-0 top-0 bottom-0 pt-20 overflow-y-scroll bg-grayLightest rounded-tr-md rounded-br-md">
          <ul className="flex-col mt-9 px-2">
            <ListItem
              title="Dashboard"
              Icon={AiOutlineHome}
              isArrow={true}
              content={["Sales", "Analytics"]}
            />
            <ListItem
              title="Apps"
              Icon={BiChip}
              isArrow={true}
              content={[
                "Chat",
                "MailBox",
                "Todo List",
                "Notes",
                "Scrumboard",
                "Practice",
              ]}
            />
            <ListItem title="Component" Icon={BiCube} />
          </ul>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export const SidebarSmall: FC<Props> = ({ open}) => {

  const dispatch = useDispatch();
  
  const setOpen = (open:boolean) => (dispatch(uiSmallSidebarToggle(false)));

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog open={open} onClose={setOpen}>
          <Transition.Child
            enter="ease-in-out duration-1000 transition-opacity"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            entered="opacity-50"
            leave="ease-in-out duration-1000 transition-opacity"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-gray-400 absolute inset-0 z-20" />
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
            <div className="w-56 bg-grayLightest fixed overflow-y-scroll left-0 top-0 bottom-0 z-20">
              <ul className="flex-col mt-9 px-2">
                <ListItem
                  title="Dashboard"
                  Icon={AiOutlineHome}
                  isArrow={true}
                  content={["Sales", "Analytics"]}
                />
                <ListItem
                  title="Apps"
                  Icon={BiChip}
                  isArrow={true}
                  content={[
                    "Chat",
                    "MailBox",
                    "Todo List",
                    "Notes",
                    "Scrumboard",
                    "Practice",
                  ]}
                />
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
