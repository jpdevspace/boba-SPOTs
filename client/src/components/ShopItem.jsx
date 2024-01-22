const ShopItem = ({ data }) => {
  console.log("Data >>> ", data);
  return <div className="shop-item">{data.name}</div>;
};

export default ShopItem;
