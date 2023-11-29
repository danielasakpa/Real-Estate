
export const PropertiesOptions = {
  method: 'GET',
  params: {
    CurrentPage: '1',
    LatitudeMin: '-22.26872153207163',
    LongitudeMax: '-10.267941690981388',
    RecordsPerPage: '50',
    LongitudeMin: '-136.83037765324116',
    LatitudeMax: '81.14747595814636',
    BedRange: '0-0',
    BathRange: '0-0',
    NumberOfDays: '0',
    CultureId: '1',
    PriceMin: '0',
    SortBy: '1',
    SortOrder: 'A',
    RentMin: '0'
  },
  headers: {
    'X-RapidAPI-Key': '0cb117725emshc885ab7f2a7265ap1b697djsn956cfe69679e',
    'X-RapidAPI-Host': 'realtor-canadian-real-estate.p.rapidapi.com'
  }
};

export const PropertyOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0cb117725emshc885ab7f2a7265ap1b697djsn956cfe69679e',
    'X-RapidAPI-Host': 'realtor-canadian-real-estate.p.rapidapi.com'
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