import React, { useState, ChangeEvent, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import styles from "./language-selector.module.scss";

const {
    container,
    dropDown,
    buttonToggle,
    icon,
    dropDownMenu,
    dropDownMenuItem,
    buttonLabel,
} = styles;

export default function LanguageSelector() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const { pathname, push, route, asPath, locale } = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const [selectedLocale, setSelectedLocale] = useState(locale);

    useEffect(() => {
        const storedLocale = localStorage.getItem("selectedLocale");
        if (storedLocale) {
            setSelectedLocale(storedLocale);
            push(route, asPath, { locale: storedLocale });
        }
    }, []);
    const [open, setOpen] = useState(false);

    const { t } = useTranslation("navbar");

    const languages = [
        { code: "en", name: t("english") },
        { code: "fr", name: t("french") },
    ];

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.currentTarget.getAttribute("data-value");

        const newLocale = value === "en" ? "en" : "fr";

        setSelectedLocale(newLocale);
        localStorage.setItem("selectedLocale", newLocale);

        push(route, asPath, {
            locale: newLocale,
        });
    };

    return (
        <div className={container}>
            <div
                className={dropDown}
                onMouseEnter={handleOpen}
                onMouseLeave={handleOpen}
            >
                <button
                    className={buttonToggle}
                    onClick={handleOpen}
                    type="button"
                >
                    <span className={buttonLabel}>
                        {locale === "en" ? t("english") : t("french")}
                    </span>
                    <FontAwesomeIcon className={icon} icon={faGreaterThan} />
                </button>
                {open && (
                    <ul className={dropDownMenu}>
                        {languages.map(language => (
                            <li
                                className={dropDownMenuItem}
                                key={language.code}
                                data-value={language.code}
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
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
