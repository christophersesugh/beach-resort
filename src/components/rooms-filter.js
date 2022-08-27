import React from "react";
import ServiceTitle from "./section-title";

export default function RoomsFilter({ setRooms, rooms }) {
  const types = ["all", ...new Set(rooms.map((room) => room.type))];

  const [typeValue, setTypeValue] = React.useState("all");

  function handleSubmit(e) {
    e.preventDefault();
    const filteredRoom = rooms
      .map((room) => room)
      .filter((room) => room.type === typeValue);
    setRooms(filteredRoom);
  }

  return (
    <section className="filter-container">
      <ServiceTitle title="search rooms" />
      <form className="filter-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={typeValue}
            defaultValue={typeValue}
            onChange={(e) => {
              setTypeValue(e.target.value);
              e.submit();
            }}
          >
            {types.map((type) => {
              return (
                <option value={type} key={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">filter</button>
      </form>
    </section>
  );
}
