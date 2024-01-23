const fetchData = async (location) => {
  const response = await fetch(`http://localhost:8080/yelp/boba/${location}`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Error while fetching data");
  }

  return resData.data;
};

export default fetchData;
