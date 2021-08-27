import { FC, lazy, memo, Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NotFoundPage from "./pages/NotFound.page";
import { LS_AUTH_TOKEN } from "./api/base";
import { FaSpinner } from "react-icons/fa";
import { me } from "./api/auth";
import { useAppSelector } from "./store";
import { useDispatch } from "react-redux";
import { meFetchAction } from "./actions/auth.actions";

interface Props {}

const AppContainerPageLazy = lazy(() => import("./pages/AppContainer.page"));
const AuthHeroPageLazy = lazy(() => import("./pages/AuthHero.page"));

const App: FC<Props> = () => {
  const user = useAppSelector((state) => {
    return state.auth.id !== undefined ? state.users.byId[state.auth.id] : undefined;
  });
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => dispatch(meFetchAction(u)));
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
            path={[
              "/dashboard",
              "/recordings/:batchNumber/:lectureNumber",
              "/profile",
            ]}
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
  );
};

export default memo(App);
