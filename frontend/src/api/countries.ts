import {Country, RawCountry, UserCountry} from "@/interfaces/country";

export const fetchCountries = async (): Promise<Country[]> => {
    const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,idd,cca3"
    );

    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }

    const res: RawCountry[] = await response.json();

    return res
        .filter(
            (country) => country.idd?.root && country.name?.common && country.flags?.svg
        )
        .map((country) => ({
            name: country.name.common,
            flag: country.flags.svg,
            calling_code:
                country.idd.root + (country.idd.suffixes?.[0] ?? ''),
            country_code_iso3: country.cca3,
        }));
};

export const fetchUserCountryInfo = async (): Promise<UserCountry> => {

}