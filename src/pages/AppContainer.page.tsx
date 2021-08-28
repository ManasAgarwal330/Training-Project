import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
import Navbar from "../components/Navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar, { SidebarSmall } from "../components/SideBar";
import ProfilePage from "./Profile.page";
import { useAppSelector } from "../store";
import { uiActions } from "../actions/ui.action";
import { sidebarOpenSelector, smallSidebarOpenSelector } from "../selectors/ui.selectors";

interface Props {}

const AppContainer: FC<Props> = () => {
  const openSidebar = useAppSelector(sidebarOpenSelector);
  const openSmallSidebar = useAppSelector(smallSidebarOpenSelector);

  return (
    <div className="box-border h-screen flex flex-col overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <div className="h-12 pl-2 py-1 box-border items-center hidden shadow-md sticky z-10 top-12 bg-white mx-0 my-0 lg:flex">
        <button onClick={() => uiActions.sidebar(!openSidebar)}>
          <GiHamburgerMenu className="h-6 w-6" />
        </button>
      </div>
      <div className="h-12 pl-2 py-1 box-border items-center flex shadow-md sticky z-10 top-12 bg-white mx-0 my-0 lg:hidden">
        <button onClick={() => uiActions.smallSidebar(!openSmallSidebar)}>
          <GiHamburgerMenu className="h-6 w-6" />
        </button>
      </div>
      <div className={`flex-grow flex box-border`}>
        <SideBar open={openSidebar} />
        <SidebarSmall open={openSmallSidebar} />
        <div
          className={`px-2 py-2 transform transition-transform ease-in-out w-full duration-1000 bg-gray-300 ${
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
            <Route path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default memo(AppContainer);
