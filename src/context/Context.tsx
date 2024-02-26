import React, { createContext, useState, ReactNode } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextValue {
  isLoggedIn: string;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<string>>;
}

export const ContextCreator = createContext<ContextValue>({
  isLoggedIn: "",
  setIsLoggedIn: ()=> {}
});

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<string>(localStorage.getItem("isLoggedIn") || "");

  return (
    <ContextCreator.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </ContextCreator.Provider>
  );
};

export default ContextProvider;
