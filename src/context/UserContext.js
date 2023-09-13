import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchUserGroups } from "../customHooks/useFetchUserGroups";

const UserContext = createContext();

// Custom hook to access the user context
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export const UserProvider = ({ children }) => {
  const initialAuthUser = {
    pk: "USER#0001",
    username: "MadisonEvans94",
    userID: "0001",
  };

  const [authUser, setAuthUser] = useState(initialAuthUser);
  const [authUid, setAuthUid] = useState("");
  const [userGroups, setUserGroups] = useState([]);

  console.log(userGroups)

  useEffect(() => {
    if (authUser) {
      setAuthUid(authUser.userID);
    }
  }, [authUser]);

  useEffect(() => {
    if (authUid) {
      const userGroups = fetchUserGroups(authUid);
      setUserGroups(userGroups);
    }
  }, [authUid]);

  return (
    <UserContext.Provider
      value={{ authUser, setAuthUser, authUid, setAuthUid, userGroups }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
