// components/CountryList.js
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import type { ICountry } from "countries-list";
// eslint-disable-next-line import/no-extraneous-dependencies
import { countries } from "countries-list";

function CountryList() {
    const countryList: ICountry[] = Object.values(countries);

    return (
        <div>
            <h1>List of Countries</h1>
            <ul>
                {countryList.map(country => (
                    <li key={country.name}>{country.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CountryList;
