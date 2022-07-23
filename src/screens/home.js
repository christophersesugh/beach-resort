import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner";
import Hero from "../components/hero";
import Services from "../components/services";
import FeaturedRooms from "../components/featured-rooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms id="featured" />
    </>
  );
}
