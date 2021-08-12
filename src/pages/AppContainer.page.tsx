import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
import Navbar from "../components/Navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import SideBar, { SidebarSmall } from "../components/SideBar";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSmallSidebar, setOpenSmallSidebar] = useState(false);

  return (
    <div className="box-border h-screen flex flex-col overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <div className="h-12 pl-2 py-1 box-border items-center hidden shadow-md z-10 sticky top-11 bg-white mx-0 my-0 lg:flex">
        <button onClick={() => setOpenSidebar((state) => !state)}>
          <GiHamburgerMenu className="h-6 w-6" />
        </button>
      </div>
      <div className="h-12 pl-2 py-1 box-border items-center flex shadow-md sticky z-10 top-10 bg-white mx-0 my-0 lg:hidden">
        <button onClick={() => setOpenSmallSidebar((state) => !state)}>
          <GiHamburgerMenu className="h-6 w-6" />
        </button>
      </div>
      <div
        className={`flex-grow flex box-border`}
      >
        <SideBar open={openSidebar} setOpen={setOpenSidebar} />
        <SidebarSmall open={openSmallSidebar} setOpen={setOpenSmallSidebar} />
        <div
          className={`px-2 py-2 transform transition-transform ease-in-out w-full duration-1000 ${
            openSidebar ? "translate-x-56 mr-56" : "translate-x-0"
          }`}
        >
          <Switch>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route path="/recordings/:batchNumber/:lectureNumber">
              <RecordingsPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default memo(AppContainer);
