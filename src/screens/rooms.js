import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner";
import Hero from "../components/hero";
import RoomsContainer from "../components/rooms-container";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}
