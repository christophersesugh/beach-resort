import * as React from "react";

const RoomsContext = React.createContext();

function RoomsProvider(props) {
  const [room, setRoom] = React.useState({
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
  });

  return <RoomsContext.Provider value={1} {...props} />;
}

function useRooms() {
  const context = React.useContext(RoomsContext);
  if (context === undefined) {
    throw new Error(`useRooms must be used in a context provider.`);
  }
  return context;
}

export { RoomsProvider, useRooms };
