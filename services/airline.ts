import axios from "axios";
import type { Airline } from "~/types/airline";

export const fetchAirlines = async () => {

    const config = useRuntimeConfig();
    const response = await axios.post(
        config.public.API_BASE_URL+"/airlines/all" );

    return response.data.airlines as Airline[];
}