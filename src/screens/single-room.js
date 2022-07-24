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
  const { name, description, price, size, capacity, pets, breakfast, extras } =
    room.fields;
  return (
    <>
      <StyledHero img={room.fields.images[0].fields.file.url}>
        <Banner title={`${name} room`}>
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
                key={index}
              />
            );
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6> {pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((extra, index) => {
            return <li key={index}>- {extra}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
