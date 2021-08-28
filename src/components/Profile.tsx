import { Menu, Transition } from "@headlessui/react";
import { FC, memo, Fragment } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Logout } from "../api/auth";
import { RiDashboardLine } from "react-icons/ri";
import { useAppSelector } from "../store";
import { meFirstNameSelector } from "../selectors/auth.selectors";


interface Props {}

const Profile: FC<Props> = () => {
  const userFirstName = useAppSelector(meFirstNameSelector);
  return (
    <Menu as="div" className="px-2 pt-2">
      <Menu.Button>
        <img
          src="data:image/png;base64,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"
          alt="Profile"
          className="h-7 w-7 rounded-md"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95 translate-y-10"
        enterTo="transform opacity-100 scale-100 translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="transform opacity-100 scale-100 translate-y-0"
        leaveTo="transform opacity-0 scale-95 translate-y-10"
      >
        <Menu.Items
          as="div"
          className="flex flex-col absolute right-4 bg-white top-11 w-40 border rounded-md h-48"
        >
          <Menu.Item
            as="div"
            className="border-b px-1 mx-2 py-1 flex items-center"
          >
            <img
              src="data:image/png;base64,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"
              alt="Profile"
              className="h-6 w-6 rounded-full mr-8"
            />
            <span className="font-display text-gray-400">
              {userFirstName}
            </span>
          </Menu.Item>
          <Link to="/profile" className={`font-display`}>
            <Menu.Item as="div" className="border-b px-1 mx-2 py-1">
              {({ active }) => (
                <div
                  className={`flex items-center justify-center rounded-md px-1 py-1 ${
                    active ? "bg-blue-400 text-white" : "text-gray-400"
                  }`}
                >
                  <FiUser className="h-4 w-4 mr-2 ml-4" />
                  <span className="flex-grow text-left"> Profile </span>
                </div>
              )}
            </Menu.Item>
          </Link>
          <Link to="/dashboard" className={`font-display`}>
            <Menu.Item as="div" className="border-b px-1 mx-2 py-1">
              {({ active }) => (
                <div
                  className={`flex items-center justify-center rounded-md px-1 py-1 ${
                    active ? "bg-blue-400 text-white" : "text-gray-400"
                  }`}
                >
                  <RiDashboardLine className="h-4 w-4 mr-2 ml-4" />

                  <span className="flex-grow text-left"> Dashboard </span>
                </div>
              )}
            </Menu.Item>
          </Link>
          <Menu.Item
            as="div"
            className="border-b px-1 mx-2 py-1 cursor-pointer"
            onClick={Logout}
          >
            {({ active }) => (
              <div
                className={`flex items-center justify-center rounded-md px-1 py-1 ${
                  active ? "bg-blue-400 text-white" : "text-gray-400"
                }`}
              >
                <FiLogOut className="h-4 w-4 mr-2 ml-4" />
                <span className="flex-grow text-left"> Logout </span>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default memo(Profile);
