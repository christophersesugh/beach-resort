import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { RoomsProvider } from "./rooms-context";

const queryClient = new QueryClient();

function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RoomsProvider>{children}</RoomsProvider>
      </Router>
    </QueryClientProvider>
  );
}

export { AppProviders };
