import { createContext } from "react";
import { User } from "./modals/User";

interface UserData {
  user?: User;
  setUser: (u: User) => void;
}

const UserContext = createContext<UserData>({
  user: undefined,
  setUser: () => {},
});

export default UserContext;
