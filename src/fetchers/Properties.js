import axios from "axios";
import { PropertiesOptions, PropertyOptions } from '../utils/realEstateOptions';

export const fetchProperties = async () => {
    console.log("Fetching properties...");

    const response = await axios.request('https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale', PropertiesOptions)
    const properties = response;

    console.log("properties", properties);
    if (properties) return properties.data.properties;
}

export const fetchProperty = async (property_id) => {
    console.log("Fetching property...");

    const response = await axios.request('https://realty-in-us.p.rapidapi.com/properties/v2/detail', { ...PropertyOptions, params: { property_id: property_id }, })
    const property = response.data;

    console.log("property", property.properties[0]);
    if (property) return property.properties[0];
}