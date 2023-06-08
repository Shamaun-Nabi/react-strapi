import { createContext } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  return <Context.Provider value={"ashik"}>{children}</Context.Provider>;
};

export default AppContext;
