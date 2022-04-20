import React, { useState } from "react";

export const sessionContext = React.createContext({
    userInfo: null,
});

export const SessionProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    const setLoginInfo = (data) => {
        setUserInfo(data);
    }

    return (
        <sessionContext.Provider value={{ userInfo, setLoginInfo }}>
            {children}
        </sessionContext.Provider>
    );
}