import React from "react";
import { useRooms } from "../context/rooms-context";
export default function FeaturedRooms() {
  const test = useRooms();
  return <div>featured-rooms{test}</div>;
}
