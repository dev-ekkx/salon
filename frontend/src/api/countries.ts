import {Country, RawCountry, UserCountry} from "@/interfaces/country";
import axios from "axios";

export const fetchCountries = async (): Promise<Country[]> => {
    try {
   console.log(process.env.NEXT_PUBLIC_COUNTRIES_API_URL, "env")
        const response = await axios.get<RawCountry[]>(`${process.env.NEXT_PUBLIC_COUNTRIES_API_URL}/all?fields=name,flags,idd,cca3`)
        const res = response.data;
        return res.filter(
            (country) => country.idd?.root && country.name?.common && country.flags?.svg
        ).map((country) => ({
            name: country.name.common,
            flag: country.flags.svg,
            calling_code: country.idd.root + (country.idd.suffixes?.[0] ?? ''),
            country_code_iso3: country.cca3,
        }));
    } catch (error) {
        console.error("Error fetching countries:", error);
        throw new Error("Failed to fetch countries");
    }
}


export const fetchUserCountryInfo = async (): Promise<UserCountry> => {
try {
    const response = await axios.get<UserCountry>("https://ipapi.co/json");
    return response.data;
}catch(error) {
    console.error("Error fetching user country info:", error);
    throw new Error("Failed to fetch user country info");
}
}