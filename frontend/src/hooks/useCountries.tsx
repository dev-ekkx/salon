import { useQuery } from "@tanstack/react-query";
import { Country } from "@/interfaces/country";
import { fetchCountries, fetchUserCountryInfo } from "@/api/countries";

export const useCountries = () =>
  useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    staleTime: 1000 * 60 * 10,
  });

export const useUserCountry = () =>
  useQuery({
    queryKey: ["userCountry"],
    queryFn: fetchUserCountryInfo,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
