import { useState } from "react";

// Components
import Button from "./Buttons";

// Utils
import locations from "../data/locations";

const LocationFilters = () => {
  const [location, setLocation] = useState(
    locations[0]?.label ?? "Los Gatos, CA",
  );

  const handleClick = (location) => setLocation(location);

  return (
    <div>
      <h2>Where are you located?</h2>
      {locations.map((office) => (
        <Button
          key={office.address}
          label={office.label}
          isActive={location === office.label}
          onClick={() => handleClick(office.label)}
        />
      ))}
    </div>
  );
};

export default LocationFilters;
