
export const PropertiesOptions = {
  method: 'POST',
  data: {
    limit: 200,
    offset: 0,
    postal_code: '90004',
    status: [
      'for_sale',
      'ready_to_build'
    ],
    sort: {
      direction: 'desc',
      field: 'list_date'
    }
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
  }
};

export const PropertyOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
  }
};

export const AgentsOptions = {
  method: 'GET',
  params: {
    postal_code: '11234',
    offset: '0',
    limit: '20',
    sort: 'recent_activity_high',
    types: 'agent'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
  }
}

export const AgentOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
  }
}