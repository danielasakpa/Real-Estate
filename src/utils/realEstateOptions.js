
export const PropertiesOptions = {
  method: 'GET',
  params: {
    LatitudeMax: '81.14747595814636',
    LatitudeMin: '-22.26872153207163',
    LongitudeMax: '-10.267941690981388',
    LongitudeMin: '-136.83037765324116',
    CurrentPage: '1',
    RecordsPerPage: '12',
    SortOrder: 'A',
    SortBy: '1',
    CultureId: '1',
    NumberOfDays: '0',
    BedRange: '0-0',
    BathRange: '0-0',
    RentMin: '0'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
  }
};

export const PropertyOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
  }
};

export const AgentsOptions = {
  method: 'GET',
  params: {
    CurrentPage: '1',
    RecordsPerPage: '10',
    SortOrder: 'A',
    SortBy: '11',
    CultureId: '1'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
  }
}

export const AgentOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
  }
}