import {useQuery} from "@tanstack/react-query";
import {Country} from "@/interfaces";
import {fetchCountries} from "@/api/countries";

export const useCountries = () =>
    useQuery<Country[]>({
        queryKey: ['countries'],
        queryFn: fetchCountries,
        staleTime: 1000 * 60 * 10,
    });