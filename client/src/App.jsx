import { useEffect, useState } from "react";
import mockData from "./data/mockData";

// Components
import LocationFilters from "./components/LocationFilters";
import ShopItem from "./components/ShopItem";
import Loading from "./components/Loading";

// Utils
import locations from "./data/locations";
import SortBy from "./components/SortBy";

const App = () => {
  const [bobaShops, setBobaShops] = useState([]);
  const [sortBy, setSortBy] = useState("distance");
  const [userLocation, setUserLocation] = useState("lg");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/yelp/boba/lg")
      .then((response) => response.json())
      .then((resData) => {
        setBobaShops(resData.data);
        setIsLoading(false);
      });
  }, []);

  const handleSetUserLocation = (location) => {
    setIsLoading(true);
    setUserLocation(location);
    setSortBy("distance");

    fetch(`http://localhost:8080/yelp/boba/${location}`)
      .then((response) => response.json())
      .then((resData) => {
        setBobaShops(resData.data);
        setIsLoading(false);
      });
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="shop-filters-container">
        <LocationFilters
          locations={locations}
          userLocation={userLocation}
          setUserLocation={handleSetUserLocation}
        />
        <SortBy sortBy={sortBy} setSortBy={handleSetSortBy} />
      </div>
      {bobaShops.map((shop) => {
        return <ShopItem key={shop.id} data={shop} />;
      })}
    </>
  );
};

export default App;
