import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomsProvider } from "./rooms-context";
import { AuthProvider } from "./auth-context";

function AppProviders({ children }) {
  return (
    <Router>
      <AuthProvider>
        <RoomsProvider>{children}</RoomsProvider>
      </AuthProvider>
    </Router>
  );
}

export { AppProviders };
