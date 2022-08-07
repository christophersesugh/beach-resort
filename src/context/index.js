import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomsProvider } from "./rooms-context";

function AppProviders({ children }) {
  return (
    <Router>
      <RoomsProvider>{children}</RoomsProvider>
    </Router>
  );
}

export { AppProviders };
