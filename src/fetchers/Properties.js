import axios from "axios";
import { realEstateOptions } from '../utils/realEstateOptions';

export const fetchProperties = async () => {
    console.log("Fetching properties...");

    const response = await axios.request('https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale', realEstateOptions)
    const properties = response;

    console.log("properties", properties.data.properties);
    if (properties) return properties.data.properties;
}