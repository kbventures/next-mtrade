// // components/CountryList.js
// import React from "react";
// // eslint-disable-next-line import/no-extraneous-dependencies
// import type { ICountry } from "countries-list";
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { countries } from "countries-list";

// function CountryList() {
//     const countryList: ICountry[] = Object.values(countries);

//     return (
//         <div>
//             <ul>
//                 {countryList.map(country => (
//                     <li key={country.name}>{country.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default CountryList;

import React, { useState } from "react";
import type { ICountry } from "countries-list";
import { countries } from "countries-list";

function CountryList() {
    const countryList: ICountry[] = Object.values(countries);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(
        null
    );

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectCountry = (country: ICountry) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    return (
        <div className="country-list">
            <input
                type="text"
                value={selectedCountry ? selectedCountry.name : ""}
                onClick={toggleDropdown}
                readOnly
            />
            {isOpen && (
                <ul className="country-dropdown">
                    {countryList.map(country => (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                        <li
                            key={country.name}
                            onClick={() => selectCountry(country)}
                        >
                            {country.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CountryList;
