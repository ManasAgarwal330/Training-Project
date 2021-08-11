import { FC, memo } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthHeroPage from "./pages/AuthHero.page";
import NotFoundPage from "./pages/NotFound.page";
import AppContainerPage from "./pages/AppContainer.page";
import { LS_LOGIN_TOKEN } from "./api";

interface Props {}
const token = localStorage.getItem(LS_LOGIN_TOKEN);
const App: FC<Props> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            <AuthHeroPage />
          </Route>
          <Route
            path={["/dashboard", "/recordings/:batchNumber/:lectureNumber"]}
            exact
          >
            <AppContainerPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default memo(App);
