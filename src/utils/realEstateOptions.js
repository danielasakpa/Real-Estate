
export const realEstateOptions = {
  method: 'GET',
  params: {
    city: 'New York City',
    state_code: 'NY',
    offset: '0',
    limit: '200',
    sort: 'relevance'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
  }
};
