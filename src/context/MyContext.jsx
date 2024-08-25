import {createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children  }) => {
  const [dark, setDark] = useState(false);

  return (
    <MyContext.Provider  value={{ dark, setDark }}>
      {children }
    </MyContext.Provider >
  );
};

export const useMyContext = () => useContext(MyContext);
