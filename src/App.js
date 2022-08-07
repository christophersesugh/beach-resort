import React from "react";
import "./App.css";
import Loading from "./components/loading";
const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"));
const AuthenticatedApp = React.lazy(() =>
  import(/* webpackPrefetch: true */ "./authenticated-app")
);

function App() {
  let user = false;
  return (
    <React.Suspense fallback={<Loading />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}

export default App;
