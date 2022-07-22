import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/app-routes";
import FullPageErrorFallback from "./components/full-page-error-fallback";
import Navbar from "./components/navbar";

function App() {
  return (
    <main>
      <ErrorBoundary
        FallbackComponent={FullPageErrorFallback}
        onReset={() => {}}
      >
        <Navbar />
        <AppRoutes />
      </ErrorBoundary>
    </main>
  );
}

export default App;
