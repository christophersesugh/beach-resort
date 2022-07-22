import React from "react";
import Banner from "./banner";
import Hero from "./hero";

export default function FullPageErrorFallback({ error }) {
  return (
    <Hero>
      <Banner title="Error..." subtitle={error.message}>
        <button className="btn-primary">try refreshing the page</button>
      </Banner>
    </Hero>
  );
}
