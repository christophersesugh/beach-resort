import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRooms } from "../context/rooms-context";
// import Hero from "../components/hero";
import Banner from "../components/banner";
import StyledHero from "../components/styled-hero";

export default function SingleRoom() {
  const { slug } = useParams();

  const { rooms } = useRooms();
  const room = rooms.find((room) => room.fields.slug === slug);
  return (
    <>
      <StyledHero img={room.fields.images[0].fields.file.url}>
        <Banner title={`${room.fields.name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {room.fields.images.map((image, index) => {
            return (
              <img
                src={image.fields.file.url}
                alt={room.fields.name}
                id={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
