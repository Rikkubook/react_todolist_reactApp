
import { createContext, useContext } from "react";

export const AuthContext = createContext(null); // 建立環境

export const useAuth = () => {
    return useContext(AuthContext);
};