import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);

      console.log(decoded);

      console.log("Decoded Token: ", decoded);
      return decoded;
    } catch (error) {
      console.error("Invalid token", error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken, decodeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
