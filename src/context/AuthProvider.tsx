import { FC, createContext, useState } from "react";
import { User } from "../interfaces/User";

const useValue = () => {
  const [user, setUser] = useState<User>({
    token: "",
    isAuthenticated: false,
  });

  return { user, setUser };
};

export const UserContext = createContext({} as ReturnType<typeof useValue>);

interface Pros {
  children: React.ReactNode;
}

export const AuthProvider: FC<Pros> = ({ children }) => {
  const [user, setUser] = useState({
    token: "",
    isAuthenticated: false,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
