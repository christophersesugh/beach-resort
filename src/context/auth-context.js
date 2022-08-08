import * as React from "react";
import * as auth from "../utils/auth-provider";
import { useAsync } from "../utils/hooks/use-async";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

function AuthProvider(props) {
  const [status, setStatus] = React.useState("idle");
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  const isIdle = status === "idle";
  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";

  const register = (form) => auth.register(form);
  const login = (form) => auth.login(form);
  const logout = () => auth.logout();

  function handleUser(user) {
    setUser(user);
  }

  function handleError(error) {
    setError(error);
  }

  React.useEffect(() => {
    auth.onAuthStateChanged(auth.auth, handleUser, handleError);
  }, []);
  const authProps = { register, login, logout, user };
  return <AuthContext.Provider value={authProps} {...props} />;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`AuthContext must be used within an AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
