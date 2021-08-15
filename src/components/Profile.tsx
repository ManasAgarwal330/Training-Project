import { Menu, Transition } from "@headlessui/react";
import { FC, memo, Fragment } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Logout } from "../api/auth";
import { useContext } from "react";
import UserContext from "../UserContext";

interface Props {}

const Profile: FC<Props> = (props) => {
  const { user } = useContext(UserContext);
  return (
    <Menu as="div" className="px-2 pt-2">
      <Menu.Button>
        <img
          src="data:image/jpeg;base64,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"
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
              src="data:image/jpeg;base64,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"
              alt="Profile"
              className="h-6 w-6 rounded-full mr-8"
            />
            <span className="font-display text-gray-400">
              {user!.first_name}
            </span>
          </Menu.Item>
          <Menu.Item as="div" className="border-b px-1 mx-2 py-1">
            {({ active }) => (
              <div
                className={`flex items-center justify-center rounded-md px-1 py-1 ${
                  active ? "bg-blue-400 text-white" : "text-gray-400"
                }`}
              >
                <FiUser className="h-4 w-4 mr-2" />
                <Link to="/recordings/1/1" className={`font-display`}>
                  Profile
                </Link>
              </div>
            )}
          </Menu.Item>
          <Menu.Item as="div" className="border-b px-1 mx-2 py-1">
            {({ active }) => (
              <div
                className={`flex items-center justify-center rounded-md px-1 py-1 ${
                  active ? "bg-blue-400 text-white" : "text-gray-400"
                }`}
              >
                <FiLogOut className="h-4 w-4 mr-2" />
                <button className={`font-display`} onClick={Logout}>
                  Logout
                </button>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default memo(Profile);
