import { FC, memo } from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard.page";
import LoginPage from './pages/Login.page';
import RecordingsPage from "./pages/Recordings.page";
import SignUpPage from "./pages/SignUp.page";

interface Props {}

const App: FC<Props> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>
          <Route path="/recordings" exact>
            <RecordingsPage />
          </Route>
          <Route path="/signup" exact>
            <SignUpPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default memo(App);
