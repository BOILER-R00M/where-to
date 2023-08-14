import { createContext, useState, useEffect } from 'react';

// Create the UserContext with an empty default value.
const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

// just setting up a dummy user for now
    const [authUser, setAuthUser] = useState({
        "pk": "USER#0001",
        "username": "MadisonEvans94",
        "userID": "0001"
    });

// Setting dummy userid for now
    const [authUid, setAuthUid] = useState("");

    useEffect(() => {
        if (authUser) {
            setAuthUid(authUser.userID);
        }
    },[authUser])


    return (
        <UserContext.Provider value={{ authUser, setAuthUser, authUid, setAuthUid }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
