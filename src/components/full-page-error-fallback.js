import React from "react";
import Banner from "./banner";
import Hero from "./hero";

export default function FullPageErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Hero>
      <Banner title="Error..." subtitle={error.message}>
        <button className="btn-primary" onClick={resetErrorBoundary}>
          try refreshing page
        </button>
      </Banner>
    </Hero>
  );
}
