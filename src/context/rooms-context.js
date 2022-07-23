import * as React from "react";
// import { useQuery } from "react-query";
// import { useAsync } from "../use-async";
import data from "../data";

const RoomsContext = React.createContext();

function RoomsProvider(props) {
  const [rooms, setRooms] = React.useState(data);
  // const {
  //   data: rooms,
  //   run,
  //   isError,
  //   isIdle,
  //   isLoading,
  //   isSuccess,
  //   setData,
  // } = useAsync();

  // async function fetchRooms() {
  //   let data = window
  //     .fetch("../data")
  //     .then((response) => response.json())
  //     .then((response) => setData(response));
  //   return data;
  // }

  // React.useEffect(() => {
  //   run(fetchRooms());
  // }, []);

  // console.log(rooms);

  return <RoomsContext.Provider value={{ rooms, setRooms }} {...props} />;
}

function useRooms() {
  const context = React.useContext(RoomsContext);
  if (context === undefined) {
    throw new Error(`useRooms must be used in a context provider.`);
  }
  return context;
}

export { RoomsProvider, useRooms };
