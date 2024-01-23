import bobaShopImg from "../assets/default_boba_shop.png";

const ShopItem = ({ data }) => {
  const fullAddress = () => {
    if (data?.location) {
      return `${data.location?.address1},  ${data.location?.address2 ?? ""}, ${data.location.city}, ${data.location.state} ${data.location.zip_code}`;
    } else {
      return "No address available for this shop";
    }
  };

  return (
    <div className="shop-item">
      <div className="shop-img-container">
        <img
          data-testid="shop-img"
          className="shop-img"
          src={data?.image_url ?? bobaShopImg}
          alt="Boba Shop"
        />
      </div>
      <div className="shop-content">
        <p>{data?.is_closed ? "🚫 Store is closed" : null}</p>
        <p data-testid="shop-name" className="shop-name">
          {data?.name ?? "Some Boba Shop"}
        </p>
        <p>{fullAddress()}</p>
        <p>⭐️ {data?.rating ?? "No rating available"}</p>
        {data?.distance && (
          <p>The store is {Math.floor(data?.distance)} meters from you</p>
        )}
        {data?.phone && (
          <p>
            <a href={`tel:${data.phone}`}>Call Store</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ShopItem;
