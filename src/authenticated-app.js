import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import AppRoutes from "./components/app-routes";
import FullPageErrorFallback from "./components/full-page-error-fallback";
import Navbar from "./components/navbar";

export default function AuthenticatedApp() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={FullPageErrorFallback}
        onReset={() => {}}
      >
        <Navbar />
        <AppRoutes />
      </ErrorBoundary>
    </>
  );
}
