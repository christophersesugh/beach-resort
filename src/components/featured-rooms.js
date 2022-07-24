import React from "react";
import { useRooms } from "../context/rooms-context";
import SectionTitle from "./section-title";
// import Loading from "./loading";
import Room from "./room";
export default function FeaturedRooms() {
  const { rooms } = useRooms();

  const featuredRooms = rooms.filter((room) => {
    const { featured } = room.fields;
    return featured === true;
  });

  return (
    <section className="featured-rooms">
      <SectionTitle title="featured rooms" />
      {/* <Loading /> */}
      <div className="featured-rooms-center">
        {featuredRooms.map((room) => {
          const { id } = room.sys;
          return <Room key={id} room={room} />;
        })}
      </div>
    </section>
  );
}
