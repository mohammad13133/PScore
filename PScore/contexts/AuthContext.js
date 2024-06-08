import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState({});

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
  const getUser = () => {
    try {
      const decoded = jwtDecode(token);
      console.log(decoded);
      const user = decoded;
      return user;
    } catch (error) {
      console.error("Invalid token", error);
      return null;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        decodeToken,
        getUser,
        profile,
        setProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
