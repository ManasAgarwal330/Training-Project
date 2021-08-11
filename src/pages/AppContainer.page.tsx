import { FC, memo, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarSmall } from "../components/SideBar";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSmallSidebar, setOpenSmallSidebar] = useState(false);
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <div className="h-12 flex items-center w-full shadow-md pl-2 mt-12 lg:hidden">
          <button onClick={() => setOpenSmallSidebar((state) => !state)}>
            <GiHamburgerMenu className="h-6 w-6" />
          </button>
        </div>
        <div className="h-12 items-center w-full shadow-md pl-2 mt-12 hidden lg:flex">
          <button onClick={() => setOpenSidebar((state) => !state)}>
            <GiHamburgerMenu className="h-6 w-6" />
          </button>
        </div>
        <div className="block lg:hidden">
          <SidebarSmall open={openSmallSidebar} setOpen={setOpenSmallSidebar} />
          <div className={`h-screen flex`}>
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
        <div className="hidden lg:block">
          <SideBar open={openSidebar} setOpen={setOpenSidebar} />
          <div
            className={`h-screen transform transition-all duration-1000 ease-in-out flex ${
              openSidebar ? "translate-x-56" : "translate-x-0"
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
    </>
  );
};

export default memo(AppContainer);
