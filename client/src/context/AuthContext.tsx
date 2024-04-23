import { ReactNode, createContext, useEffect, useState } from "react";
import { loginService } from "../services/AuthService";

interface AuthContextInterface {
  token: string;
  authError: boolean;
  isAuth: boolean;
  login(userForm: UserForm): Promise<UserInfo | undefined>;
  logout(): void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const isAuth = token !== "";

  const login = async (userForm: UserForm): Promise<UserInfo | undefined> => {
    try {
      const { user, token } = await loginService(userForm);
      setToken(token);
      localStorage.setItem("jwt-token", token);
      return user;
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("jwt-token");
  };

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem("jwt-token");
    if (tokenLocalStorage !== null) {
      setToken(tokenLocalStorage);
    }
  }, []);

  const initialAuthState = {
    token,
    authError: error,
    isAuth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={initialAuthState}>
      {children}
    </AuthContext.Provider>
  );
};
