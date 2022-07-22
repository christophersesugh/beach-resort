import React from "react";
import { useParams } from "react-router-dom";
import { useRooms } from "../context/rooms-context";

export default function SingleRoom() {
  const { slug } = useParams();

  const { rooms } = useRooms();
  const room = rooms.find((room) => room.fields.slug === slug);
  console.log(room);
  return <div>single-room {room.fields.slug}</div>;
}
