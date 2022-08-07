import React from "react";
import { useRooms } from "../context/rooms-context";
import SectionTitle from "./section-title";
// import Loading from "./loading";
import Room from "./room";
export default function FeaturedRooms() {
  const { rooms } = useRooms();

  const featuredRooms = rooms.filter((room) => {
    return room.featured === true;
  });

  return (
    <section className="featured-rooms">
      <SectionTitle title="featured rooms" />
      {/* <Loading /> */}
      <div className="featured-rooms-center">
        {featuredRooms.map((room, index) => {
          return <Room key={index} room={room} />;
        })}
      </div>
    </section>
  );
}
