import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAgent } from "../fetchers/Agents"
import Loader from '../components/Loader'
import { useLocation } from "react-router-dom"

function Query() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}

const Agent = () => {
    let query = Query();

    const advertiser_id = query.get("advertiser_id");
    const nrds_id = query.get("nrds_id");

    const { data, error, status, isRefetching } = useQuery(
        ["property"],
        async () => await fetchAgent(advertiser_id, nrds_id),
    );

    if (status === "error") {
        console.log("Error: ", error);
    }

    console.log(data);

    return (
        <>
            {status === 'loading' || isRefetching ?
                <Loader />
                : <> </>
            }
        </>
    )
}

export default Agent;