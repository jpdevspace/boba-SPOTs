import { useEffect, useState } from "react";

// Components
import Error from "./components/Error";
import LocationFilters from "./components/LocationFilters";
import Loading from "./components/Loading";
import ShopItem from "./components/ShopItem";
import SortBy from "./components/SortBy";

// Utils
import locations from "./data/locations";
import fetchData from "./utils/http";

const App = () => {
  const [bobaShops, setBobaShops] = useState([]);
  const [sortBy, setSortBy] = useState("distance");
  const [userLocation, setUserLocation] = useState("lg");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchInitialData() {
      setIsLoading(true);

      try {
        const shops = await fetchData("lg");
        setBobaShops(shops);
      } catch (e) {
        setError({
          message: e.message || "Error while fetching the initial data",
        });
      }

      setIsLoading(false);
    }

    fetchInitialData();
  }, []);

  const handleSetUserLocation = async (location) => {
    setIsLoading(true);
    setUserLocation(location);
    setSortBy("distance");

    try {
      const shops = await fetchData(location);
      setBobaShops(shops);
    } catch (e) {
      setError({
        message: e.message || "Error while fetching your bobas",
      });
    }

    setIsLoading(false);
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

  if (error) {
    return <Error message={error.message} />;
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
      {isLoading && <Loading />}
      {!isLoading && bobaShops.length === 0 && (
        <p>Sorry, no stores near that location!</p>
      )}
      {!isLoading &&
        bobaShops.length > 0 &&
        bobaShops.map((shop) => <ShopItem key={shop.id} data={shop} />)}
    </>
  );
};

export default App;
