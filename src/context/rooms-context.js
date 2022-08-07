import * as React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../utils/config";
import { useAsync } from "../utils/hooks/use-async";
import Loading from "../components/loading";
import FullPageErrorFallback from "../components/full-page-error-fallback";

initializeApp(firebaseConfig);
const db = getFirestore();
const coll = collection(db, "rooms");

const RoomsContext = React.createContext();

function RoomsProvider(props) {
  const {
    data: rooms,
    run,
    error,
    setData: setRooms,
    isError,
    isIdle,
    isLoading,
    isSuccess,
  } = useAsync();

  function fetchRooms() {
    let result = getDocs(coll).then((rooms) => {
      return rooms.docs.map((room) => room.data());
    });
    return result;
  }

  React.useEffect(() => {
    run(fetchRooms());
  }, []);

  if (isIdle || isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  if (isSuccess) {
    return <RoomsContext.Provider value={{ rooms, setRooms }} {...props} />;
  }
}

function useRooms() {
  const context = React.useContext(RoomsContext);
  if (context === undefined) {
    throw new Error(`useRooms must be used in a context provider.`);
  }
  return context;
}

export { RoomsProvider, useRooms };
