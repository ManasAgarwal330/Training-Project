import { FC, memo, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <div className="">
        <Navbar />
        <div className="h-12 flex items-center w-full shadow-md pl-2">
          <button onClick={() => setOpenSidebar((state) => !state)}>
            <GiHamburgerMenu className="h-6 w-6" />
          </button>
        </div>
        <SideBar open={openSidebar} setOpen={setOpenSidebar} />
        <div
          className={`h-screen flex transform transition-all duration-700 ease-in-out ${
            openSidebar ? "translate-x-52" : "translate-x-0"
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
    </>
  );
};

export default memo(AppContainer);
