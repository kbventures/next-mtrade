import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./language-selector.module.scss";

const { dropDown, buttonToggle, dropDownMenu, dropDownMenuItem, buttonLabel } =
    styles;

export default function LanguageSelector() {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const languages = [
        { code: "en", name: t("english") },
        { code: "fr", name: t("french") },
    ];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

    const handleLanguageChange = (event: React.MouseEvent<HTMLLIElement>) => {
        const langCode =
            (event.target as HTMLElement).getAttribute("data-value") ?? ""; // Use nullish coalescing operator to provide a default value
        setSelectedLanguage(langCode);
        i18n.changeLanguage(langCode);
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={dropDown}>
            <button className={buttonToggle} onClick={handleOpen} type="button">
                <span className={buttonLabel}>
                    {i18n.language === "en" ? t("english") : t("french")}
                </span>
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
    );
}
