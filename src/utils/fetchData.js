import axios from 'axios';

export const realEstateOptions = {
  method: 'GET',
  params: {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '25',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};


export const fetchData = async (url,options) => {
  const data = await axios.request(url, options).then(function (response) {
    return response.data.hits;
  }).catch(function (error) {
    return error;
  });
  return data;
}

