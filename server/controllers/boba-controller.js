import yelp from 'yelp-fusion';
import locations from "../util/locations.js";

const yelpClient = yelp.client(process.env.YELP_API_KEY);

const showBobaStoresByLocation = async (req, res, next) => {
  const yelpApiUrl = 'https://api.yelp.com/v3/businesses/search';

  let location = '';

  // Just a little bit of validation to restrict the backend to only call Yelp's API
  // with the 3 locations set
  switch (req.params.location) {
    case 'la':
      location = locations[1].label;
      break;
    case 'ny':
      location = locations[2].label;
      break;
    default: // default to Los Gatos
      location = locations[0].label;
      break;
  }

  const reqOpts = {
    location,
    term: 'boba',
    sort_by: 'distance',
    radius: 10000,
    limit: 20
  }

  try {
    const yelpRes = await yelpClient.search(reqOpts);
    const { businesses } = yelpRes.jsonBody;
    const data = businesses.map(business => ({
      id: business.id, 
      name: business.name, 
      image_url: business.image_url, 
      is_closed: business.is_closed, 
      url: business.url, 
      rating: business.rating, 
      phone: business.phone, 
      distance: business.distance,
      location: business.location
    }));

    res.status(200).json({ data });
  } catch (e) {
    res.status(400).json({
      message: 'Ooops, something went wrong...',
    })
  }
}

export default { showBobaStoresByLocation };