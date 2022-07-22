import React from "react";
import { Link } from "react-router-dom";

export default function Room({ room }) {
  const { name, slug, images, price } = room.fields;
  console.log(name, images, price);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]?.fields?.file?.url} alt={name} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/single-room/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
