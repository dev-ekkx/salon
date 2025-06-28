export interface RawCountry {
    name: {
        common: string;
    };
    flags: {
        svg: string;
    };
    idd: {
        root: string;
        suffixes?: string[];
    };
    cca3: string;
}

export interface Country {
    name: string;
    flag: string;
    calling_code: string;
    country_code_iso3: string;
}
