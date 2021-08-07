import { FC, memo } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthHeroPage from "./pages/AuthHero.page";
import NotFoundPage from "./pages/NotFound.page";
import AppContainerPage from "./pages/AppContainer.page";

interface Props {}

const App: FC<Props> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path={["/login", "/signup"]} exact>
            <AuthHeroPage />
          </Route>
          <Route path={["/dashboard", "/recordings"]} exact>
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
