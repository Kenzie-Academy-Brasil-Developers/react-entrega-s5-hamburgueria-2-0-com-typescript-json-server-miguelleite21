import { useState, ReactNode, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";

import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}
interface UserLogin {
  email: string;
  password: string;
}
interface UserRegister {
  name: string;
  email: string;
  password: string;
  comfirmPassword: string;
}
interface AuthProviderData {
  authToken: string;
  signIn: (userdata: UserLogin) => void;
  Logout: () => void;
  goTo: (page: string) => void;
  Register: (userdata: UserRegister) => void;
  loginErr: string;
}
const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const [loginErr, setLoginErr] = useState("");

  const signIn = (userData: UserLogin) => {
    api
      .post("login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data);
        setAuthToken(response.data);
        setLoginErr("");
        history.push("/home");
      })
      .catch((err) => setLoginErr(err));
  };

  const Register = (userData: UserRegister) => {
    api
      .post("register", userData)
      .then((response) => {
        history.push("/");
      })
      .catch((err) => err);
  };

  const Logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  const goTo = (page: string) => {
    history.push(page);
  };

  return (
    <AuthContext.Provider
      value={{ authToken, Logout, signIn, goTo, Register, loginErr }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
