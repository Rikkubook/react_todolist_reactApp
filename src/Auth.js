import { createContext, useContext } from "react";

const AuthContext = createContext(null); // 建立環境

const useAuth = () => {
  return useContext(AuthContext);
};

export {useAuth, AuthContext}