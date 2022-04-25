import { createContext, useState, useEffect } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(()=>{
    const deactivate = onAuthStateChangedListener((user)=>{
      if(user){
        createUserDocumentFromAuth(user);
      }
      //is user is there, then set its value
      setCurrentUser(user);
      console.log(user)
    })

    // return the value of deactivate, if signedout then signedout will be returned.
    return deactivate;
  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
