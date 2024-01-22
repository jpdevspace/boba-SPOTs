import Button from "./Buttons";

const SortBy = ({ sortBy, setSortBy }) => {
  return (
    <div>
      <h2>Sort By</h2>
      <Button
        key="rating"
        label="Rating - Best First"
        isActive={sortBy === "rating"}
        onClick={() => setSortBy("rating")}
      />
      <Button
        key="distance"
        label="Distance - Closest First"
        isActive={sortBy === "distance"}
        onClick={() => setSortBy("distance")}
      />
    </div>
  );
};

export default SortBy;
