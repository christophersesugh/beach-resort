import React from "react";
import RoomsFilter from "./rooms-filter";
import RoomsList from "./rooms-list";
import { useRooms } from "../context/rooms-context";

// function getTypes(items, value) {
//   return [...new Set(items.map((item) => item.fields[value]))];
// }

export default function RoomsContainer() {
  const { rooms, setRooms } = useRooms();

  // const types = ["all", ...getTypes(rooms, "type")];

  return (
    <>
      {/* {loading} */}
      {/* <RoomsFilter /> */}
      <RoomsList rooms={rooms} />
    </>
  );
}
