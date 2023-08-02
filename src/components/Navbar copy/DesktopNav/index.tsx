import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import styles from "./desktop-nav.module.scss";
import Logo from "./Logo/index";
import LanguageDetector from "./LanguageSelector/index";

const {
    deskTopNav,
    navLeft,
    navRight,
    menuLeft,
    menuRight,
    menuItemsLeft,
    menuItemsRight,
    signup,
    login,
    link,
    span,
} = styles;

export default function DeskTopNav() {
    const { t } = useTranslation();

    return (
        <div>
            <nav className={deskTopNav}>
                <div className={navLeft}>
                    <Logo />
                    <ul className={menuLeft}>
                        <li className={menuItemsLeft}>About Us</li>
                        <li className={menuItemsLeft}>More</li>
                    </ul>
                </div>
                <div className={navRight}>
                    <ul className={menuRight}>
                        <li className={menuItemsRight}>
                            <Link className={`${link} ${login}`} href="/login">
                                <span className={span}>{t("login")}</span>
                            </Link>
                        </li>
                        <li className={menuItemsRight}>
                            <Link
                                className={`${link} ${signup}`}
                                href="/signup"
                            >
                                <span className={span}>{t("signup")}</span>
                            </Link>
                        </li>
                        <li className={menuItemsRight}>
                            <LanguageDetector />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
