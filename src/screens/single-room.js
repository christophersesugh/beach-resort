import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRooms } from "../context/rooms-context";
// import Hero from "../components/hero";
import Banner from "../components/banner";
import StyledHero from "../components/styled-hero";
import { images } from "../images";

export default function SingleRoom() {
  const { slug } = useParams();

  const { rooms } = useRooms();
  const room = rooms.find((room) => room.slug === slug);

  return (
    <>
      <StyledHero img={room.images[0]}>
        <Banner title={`${room.name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {room.images.map((image, index) => {
            return <img src={image} alt={room.name} id={index} key={index} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{room.description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${room.price}</h6>
            <h6>size: {room.size} SQFT</h6>
            <h6>
              max capacity:{" "}
              {room.capacity > 1
                ? `${room.capacity} people`
                : `${room.capacity} person`}
            </h6>
            <h6> {room.pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{room.breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {room.extras.map((extra, index) => {
            return <li key={index}>- {extra}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
