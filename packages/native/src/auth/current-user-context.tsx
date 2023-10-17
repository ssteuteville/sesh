import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { auth } from "../initialize-firebase";

const currentUserContext = createContext<User | null>(null);

export const useCurrentUser = () => useContext(currentUserContext);

export const CurrentUserContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <currentUserContext.Provider value={currentUser}>
      {children}
    </currentUserContext.Provider>
  );
};
