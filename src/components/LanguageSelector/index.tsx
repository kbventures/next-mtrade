import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import styles from "./language-selector.module.scss";

const {
    container,
    dropDown,
    buttonToggle,
    icon,
    dropDownMenu,
    dropDownMenuItem,
} = styles;

export default function LanguageSelector() {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const languages = [
        { code: "en", name: t("english") },
        { code: "fr", name: t("french") },
    ];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore comment
    const handleLanguageChange = event => {
        const langCode = event.target.getAttribute("data-value");
        // eslint-disable-next-line no-use-before-define
        setSelectedLanguage(langCode);
        i18n.changeLanguage(langCode);
        setOpen(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={container}>
            <div className={dropDown}>
                <button
                    className={buttonToggle}
                    type="button"
                    onClick={handleOpen}
                >
                    {i18n.language === "en" ? t("english") : t("french")}
                    <FontAwesomeIcon className={icon} icon={faGreaterThan} />
                </button>
                {open && (
                    <ul className={dropDownMenu}>
                        {languages.map(language => (
                            <li
                                className={dropDownMenuItem}
                                key={language.code}
                                data-value={language.code}
                                onClick={handleLanguageChange}
                                aria-hidden="true"
                            >
                                {language.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

// import { useRouter } from "next/router";
// // NEW
// import { ChangeEvent, useEffect, useState } from "react";
// import { useTranslation } from "next-i18next";

// const LanguageSelector = () => {
//   const { pathname, push, route, asPath, locale } = useRouter();

//   //NEW
//   const [selectedLocale, setSelectedLocale] = useState(locale);

//   // NEW
//     useEffect(() => {
//     const storedLocale = localStorage.getItem("selectedLocale");
//     if (storedLocale) {
//       setSelectedLocale(storedLocale);
//       push(route, asPath, { locale: storedLocale });
//     }
//   }, []);

//   const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     const value = event.target.value;

//     //NEW
//     setSelectedLocale(value);
//     localStorage.setItem("selectedLocale", value);

//     push(route, asPath, {
//       locale: value,
//     });
//   };

//   const { t } = useTranslation("language-selector");
//   return (
//         <div>
//             <h2>{t("languageselector")}</h2>
//             <select value={locale} onChange={handleLocaleChange}>
//                <option value="en">{t("english")}</option>
//                <option value="fr">{t("french")}</option>
//             </select>
//         </div>
//   );
// };
