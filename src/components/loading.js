import React from "react";
import loadingIcon from "../images/gif/loading-arrow.gif";
export default function Loading() {
  return (
    <div className="loading">
      <img src={loadingIcon} alt="loading icon" />
      <h1>*****</h1>
    </div>
  );
}
