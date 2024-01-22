import { useEffect, useState } from "react";
// import mockData from "./data/mockData";

// Components
import LocationFilters from "./components/LocationFilters";
import ShopItem from "./components/ShopItem";

// Utils
import locations from "./data/locations";
import SortBy from "./components/SortBy";

const App = () => {
  const [bobaShops, setBobaShops] = useState([]);
  const [sortBy, setSortBy] = useState("distance");
  const [userLocation, setUserLocation] = useState(
    locations[0]?.label ?? "Los Gatos, CA",
  );

  useEffect(() => {
    fetch("http://localhost:8080/yelp/boba/lg")
      .then((response) => response.json())
      .then((resData) => setBobaShops(resData.data));
  }, []);

  const handleSetUserLocation = (location) => {
    setUserLocation(location);

    fetch(`http://localhost:8080/yelp/boba/${location}`)
      .then((response) => response.json())
      .then((resData) => setBobaShops(resData.data));
  };

  const handleSetSortBy = (sortBy) => {
    setSortBy(sortBy);
    let sortedBobas = [];

    if (sortBy === "distance") {
      sortedBobas = bobaShops.toSorted(
        (shopA, shopB) => shopA.distance - shopB.distance,
      );
    } else if (sortBy === "rating") {
      sortedBobas = bobaShops.toSorted(
        (shopA, shopB) => shopB.rating - shopA.rating,
      );
    }

    setBobaShops(sortedBobas);
  };

  return (
    <>
      <LocationFilters
        locations={locations}
        userLocation={userLocation}
        setUserLocation={handleSetUserLocation}
      />
      <SortBy sortBy={sortBy} setSortBy={handleSetSortBy} />
      {bobaShops.map((shop) => {
        return <ShopItem key={shop.id} data={shop} />;
      })}
    </>
  );
};

export default App;
