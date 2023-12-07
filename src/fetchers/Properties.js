import axios from "axios";
import { PropertiesOptions, PropertyOptions } from '../utils/realEstateOptions';

export const fetchProperties = async (page) => {
    console.log(`Fetching properties for page ${page}....`);

    const response = await axios.request('https://realty-in-ca1.p.rapidapi.com/properties/list-residential', {
        ...PropertiesOptions,
        params: {
            ...PropertiesOptions.params,
            CurrentPage: page.toString(),
        },
    })
    const properties = response.data;

    console.log(properties)

    if (properties) return properties;
}

export const fetchProperty = async (property_id) => {
    console.log("Fetching property...");

    const response = await axios.request('https://realty-in-ca1.p.rapidapi.com/properties/detail', {
        ...PropertyOptions, params: {
            ReferenceNumber: '30794904',
            PropertyID: property_id,
            PreferedMeasurementUnit: '1',
            CultureId: '1'
        },
    })
    const property = response.data;

    console.log("property", property);
    if (property) return property;
}