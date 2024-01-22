import yelp from 'yelp-fusion';


const yelpClient = yelp.client(process.env.YELP_API_KEY);

const showBobaStores = async (req, res, next) => {
  const yelpApiUrl = 'https://api.yelp.com/v3/businesses/search';

  const reqOpts = {
    location: 'Los%20Angeles',
    sort_by: 'best_match',
    radius: 10000,
    limit: 5
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
      distance: business.distance
    }
    ));

    res.status(200).json({
      data
    });
  } catch (e) {
    res.status(400).json({
      message: 'Ooops, something went wrong...',
    })
  }
}

export default { showBobaStores };