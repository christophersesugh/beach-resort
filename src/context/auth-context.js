import * as React from "react";
import * as auth from "../utils/auth-provider";
import Loading from "../components/loading";
import FullPageErrorFallback from "../components/full-page-error-fallback";

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

  function handleUser(user) {
    setUser(user);
    setStatus("success");
  }

  function handleError(error) {
    setError(error);
    setStatus("error");
  }

  React.useEffect(() => {
    setStatus("loading");
    auth.onAuthStateChanged(auth.auth, handleUser, handleError);
  }, []);

  const register = async ({ email, password }) =>
    auth.createUserWithEmailAndPassword(auth.auth, email, password);

  const login = async ({ email, password }) =>
    auth.signInWithEmailAndPassword(auth.auth, email, password);

  const logout = async () => {
    auth.signOut(auth.auth);
    setUser(null);
  };

  if (isIdle || isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  if (isSuccess) {
    const authProps = { register, login, logout, user };
    return <AuthContext.Provider value={authProps} {...props} />;
  }

  throw new Error(`Unhandled status ${status}`);
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`AuthContext must be used within an AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
