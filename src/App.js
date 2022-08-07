import React from "react";
import "./App.css";
import Loading from "./components/loading";
const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"));
const AuthenticatedApp = React.lazy(() => import("./authenticated-app"));

function App() {
  let user = true;
  return (
    <React.Suspense fallback={<Loading />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}

export default App;
