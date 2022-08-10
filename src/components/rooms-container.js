import React from "react";
import RoomsFilter from "./rooms-filter";
import RoomsList from "./rooms-list";
import { useRooms } from "../context/rooms-context";

export default function RoomsContainer() {
  const { rooms, setRooms } = useRooms();

  return (
    <>
      <RoomsFilter rooms={rooms} setRooms={setRooms} />
      <RoomsList rooms={rooms} />
    </>
  );
}
