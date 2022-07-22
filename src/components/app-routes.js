import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "../screens/error";
import Home from "../screens/home";
import Rooms from "../screens/rooms";
import SingleRoom from "../screens/single-room";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/single-room/:slug" element={<SingleRoom />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
