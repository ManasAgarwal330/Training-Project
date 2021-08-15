import { FC, lazy, memo, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NotFoundPage from "./pages/NotFound.page";
import { LS_AUTH_TOKEN } from "./api/base";
import { FaSpinner } from "react-icons/fa";
import { User } from "./modals/User";
import { me } from "./api/auth";
import UserContext from "./UserContext";

interface Props {}

const AppContainerPageLazy = lazy(() => import("./pages/AppContainer.page"));
const AuthHeroPageLazy = lazy(() => import("./pages/AuthHero.page"));

const App: FC<Props> = (props) => {
  const [user, setUser] = useState<User>();
  console.log(user);
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => setUser(u));
    // eslint-disable-next-line
  }, []);

  if (token && !user) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <FaSpinner className="h-14 w-14 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <FaSpinner className="h-14 w-14 text-primary animate-spin" />
          </div>
        }
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {user ? <Redirect to="/dashboard" /> : <AuthHeroPageLazy />}
            </Route>
            <Route
              path={["/dashboard", "/recordings/:batchNumber/:lectureNumber"]}
              exact
            >
              {user ? <AppContainerPageLazy /> : <Redirect to="/login" />}
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </UserContext.Provider>
  );
};

export default memo(App);
