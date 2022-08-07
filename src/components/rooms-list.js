import React from "react";
import Room from "./room";

export default function RoomsList({ rooms }) {
  return (
    <>
      {!rooms.length ? (
        <div className="empty-search">
          <h3>no rooms matched your search.</h3>
        </div>
      ) : null}
      <section className="roomslist">
        <div className="roomslist-center">
          {rooms.map((room, i) => {
            return <Room key={i} room={room} />;
          })}
        </div>
      </section>
    </>
  );
}
