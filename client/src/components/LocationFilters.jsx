// Components
import Button from "./Buttons";

// Utils
import locations from "../data/locations";

const LocationFilters = () => {
  const handleClick = (location) => {
    console.log("Office > ", location);
  };

  return (
    <div>
      <h2>Where are you located?</h2>
      {locations.map((office) => (
        <Button
          key={office.address}
          label={`${office.city}, ${office.state}`}
          fn={() => handleClick(office.city)}
        />
      ))}
    </div>
  );
};

export default LocationFilters;
