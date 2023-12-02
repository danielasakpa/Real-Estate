import axios from "axios";
import { AgentsOptions, AgentOptions } from '../utils/realEstateOptions';

export const fetchAgents = async (page) => {
    console.log(`Fetching agents for page ${page}...`);

    const response = await axios.request('https://realty-in-ca1.p.rapidapi.com/agents/list', {
        ...AgentsOptions,
        params: {
            ...AgentsOptions.params,
            CurrentPage: page.toString(),
        },
    });

    const agents = response.data;

    if (agents) return agents;
};

export const fetchAgent = async (advertiser_id, nrds_id) => {
    console.log("Fetching agent...");

    console.log(advertiser_id)
    console.log(nrds_id)
    const response = await axios.request('https://realty-in-us.p.rapidapi.com/agents/get-profile', { ...AgentOptions, params: { advertiser_id: advertiser_id, nrds_id: nrds_id }, })
    const agent = response.data;

    console.log("agent", agent);
    if (agent) return agent;
}