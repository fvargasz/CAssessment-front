import axios from "axios";
import type { Trip } from "~/types/trip";

export const createTrip = async (body: any) : Promise<any> => {

    const config = useRuntimeConfig();

    const response = await axios.post(
        config.public.API_BASE_URL+"/trip/create", body );

    return response.data;
}

export const getActiveUserTrips = async () => {
     const config = useRuntimeConfig();
      const response = await axios.post(
        config.public.API_BASE_URL+"/trip/getActiveUserTrips" );

        return response.data.trips as Trip[];
}