import { FC, lazy, memo, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NotFoundPage from "./pages/NotFound.page";
import { LS_AUTH_TOKEN } from "./api/base";
import {FaSpinner} from 'react-icons/fa';

interface Props {}

const AppContainerPageLazy = lazy(() => import("./pages/AppContainer.page"));
const AuthHeroPageLazy = lazy(() => import("./pages/AuthHero.page"));

const token = localStorage.getItem(LS_AUTH_TOKEN);
const App: FC<Props> = (props) => {
  return (
    <>
      <Suspense fallback={<div className="h-screen w-screen flex justify-center items-center">
          <FaSpinner className="h-14 w-14 text-primary animate-spin" />
      </div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {token ? <Redirect to="/dashboard" /> : <AuthHeroPageLazy />}
            </Route>
            <Route
              path={["/dashboard", "/recordings/:batchNumber/:lectureNumber"]}
              exact
            >
              {token ? <AppContainerPageLazy /> : <Redirect to="/login" />}
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default memo(App);
