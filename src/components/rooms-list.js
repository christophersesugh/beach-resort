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
          {rooms.map((room) => {
            return <Room key={room.sys.id} room={room} />;
          })}
        </div>
      </section>
    </>
  );
}
