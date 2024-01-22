import { useEffect, useState } from "react";
import mockData from "./data/mockData";

// Components
import LocationFilters from "./components/LocationFilters";

const App = () => {
  const [bobaLocations, setBobaLocations] = useState([]);

  useEffect(() => {
    console.log("mmmm >>> ", mockData);
    const { data } = mockData;
    setBobaLocations(data);
  }, []);
  return (
    <>
      <LocationFilters />
    </>
  );
};

export default App;
