// Components
import Button from "./Button";

const LocationFilters = ({ locations, userLocation, setUserLocation }) => {
  return (
    <div className="shop-locations-filter">
      <h2>Where are you located?</h2>
      {locations.map((location) => (
        <Button
          key={location.address}
          label={location.label}
          isActive={userLocation === location.short}
          onClick={() => setUserLocation(location.short)}
        />
      ))}
    </div>
  );
};

export default LocationFilters;
