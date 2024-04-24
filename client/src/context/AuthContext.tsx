import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { loginService } from "../services/AuthService";
import { getUserInfoService } from "../services/UserService";

interface AuthContextInterface {
  token: string;
  userEmail: string;
  authError: boolean;
  isAuth: boolean;
  login(userForm: UserForm): Promise<UserInfo | undefined>;
  logout(): void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState(false);
  const isAuth = token !== "";

  const login = async (userForm: UserForm): Promise<UserInfo | undefined> => {
    try {
      const { user, token } = await loginService(userForm);
      setToken(token);
      localStorage.setItem("jwt-token", token);
      setUserEmail(user.email);
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

  const getUserEmail = useCallback(async () => {
    if (token !== "") {
      const fetchedUser = await getUserInfoService(token);
      if (fetchedUser.email === "") {
        setError(true);
        return;
      }
      setUserEmail(fetchedUser.email);
    }
  }, [token]);

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem("jwt-token");
    if (tokenLocalStorage !== null) {
      setToken(tokenLocalStorage);
      getUserEmail();
    }
  }, [getUserEmail]);

  const initialAuthState = {
    token,
    userEmail,
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
