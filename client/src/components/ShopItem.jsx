const ShopItem = ({ data }) => {
  console.log("Data >>> ", data);
  return (
    <div className="shop-item">
      <div className="shop-img-container">
        <img className="shop-img" src={data.image_url ?? ""} alt="Boba Shop" />
      </div>
      <div className="shop-content">
        <p>{data.is_closed ? "Sorry store is closed" : "Store is open!"}</p>
        <p className="shop-name">{data.name}</p>
        <p>⭐️ {data.rating}</p>
        <p>The store is {Math.floor(data.distance)} meters from you</p>
        <p>
          <a href={`tel:${data.phone}`}>Call Store</a>
        </p>
      </div>
    </div>
  );
};

export default ShopItem;
