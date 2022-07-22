import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import SectionTitle from "./section-title";

const services = [
  {
    icon: <FaCocktail />,
    title: "Free cocktails",
    info: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: <FaHiking />,
    title: "Endless hiking",
    info: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: <FaShuttleVan />,
    title: "Free shuttle",
    info: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: <FaBeer />,
    title: "Quality beer",
    info: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function Services() {
  return (
    <section className="services">
      <SectionTitle title="services" />
      <div className="services-center">
        {services.map((service, index) => (
          <article key={index} className="service">
            <span>{service.icon}</span>
            <h6>{service.title}</h6>
            <p>{service.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
