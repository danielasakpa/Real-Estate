import axios from "axios";
import { AgentsOptions } from '../utils/realEstateOptions';

export const fetchAgents = async () => {
    console.log("Fetching agents...");

    const response = await axios.request('https://realty-in-us.p.rapidapi.com/agents/list', AgentsOptions)
    const agents = response;

    console.log("agents", agents.data.agents);
    if (agents) return agents.data.agents;
}
