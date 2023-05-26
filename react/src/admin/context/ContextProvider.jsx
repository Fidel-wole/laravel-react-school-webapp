import { useState, createContext } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, setUserToken] = useState(localStorage.getItem("TOKEN") || null);

  const updateUserToken = (token) => {
    if (token) {
      localStorage.setItem("TOKEN", token);
    } else {
      localStorage.removeItem("TOKEN");
    }
    setUserToken(token);
  };

  return (
    <StateContext.Provider
      value={{
        currentUser,
        userToken,
        setCurrentUser,
        setUserToken: updateUserToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const userStateContext = StateContext;

  

// export function userStateContext() {
//   return useContext(StateContext);
// }

