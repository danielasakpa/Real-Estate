import axios from "axios";
import { PropertiesOptions, PropertyOptions } from '../utils/realEstateOptions';

export const fetchProperties = async () => {
    console.log("Fetching properties...");

    const response = await axios.request('https://realty-in-us.p.rapidapi.com/properties/v3/list', PropertiesOptions)
    const properties = response;

    console.log("properties", properties.data.data.home_search.results);
    if (properties) return properties.data.data.home_search.results;
}

export const fetchProperty = async (property_id) => {
    console.log("Fetching property...");

    const response = await axios.request('https://realty-in-us.p.rapidapi.com/properties/v3/detail', { ...PropertyOptions, params: { property_id: property_id }, })
    const property = response.data;

    console.log("property", property.data.home);
    if (property) return property.data.home;
}