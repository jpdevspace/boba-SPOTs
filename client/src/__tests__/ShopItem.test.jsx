import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import ShopItem from "../components/ShopItem";

const singleShopMockData = {
  id: "uzXxUakuyCdh8Rrmz8GmLQ",
  name: "T4 a cup of tea",
  image_url:
    "https://s3-media1.fl.yelpcdn.com/bphoto/mkp1jyK_npTRu8QKOnyzJQ/o.jpg",
  is_closed: false,
  url: "https://www.yelp.com/biz/t4-a-cup-of-tea-los-gatos-6?adjust_creative=MW8CgLIeXSjt10nHOCN1vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=MW8CgLIeXSjt10nHOCN1vQ",
  rating: 3,
  phone: "+14088193906",
  distance: 2010.019208818137,
  location: {
    address1: "15545 Union Ave",
    address2: null,
    address3: "",
    city: "Los Gatos",
    zip_code: "95032",
    country: "US",
    state: "CA",
    display_address: ["15545 Union Ave", "Los Gatos, CA 95032"],
  },
};

test("Displays a boba shop default image", async () => {
  const shopItem = render(<ShopItem />);

  const shopImage = await shopItem.findByTestId("shop-img");
  expect(shopImage.src).toContain("default_boba_shop.png");
  shopItem.unmount();
});

test("Displays a boba shop custom image", async () => {
  const shopItem = render(<ShopItem data={singleShopMockData} />);

  const shopImage = await shopItem.findByTestId("shop-img");
  expect(shopImage.src).toContain(
    "https://s3-media1.fl.yelpcdn.com/bphoto/mkp1jyK_npTRu8QKOnyzJQ/o.jpg",
  );
  shopItem.unmount();
});
