/* eslint-disable jsx-a11y/label-has-associated-control */
import { useTranslation } from "next-i18next";
import React from "react";
import Link from "next/link";
import LinkButton from "./LinkButton/index";
import DeskTopNav from "./DesktopNav";
import Logo from "./Logo/index";
import styles from "./nav-bar.module.scss";

const {
    navigationContainer,
    mobileNav,
    menuToggle,
    menuButtonContainer,
    menuButton,
    menu,
    menuItem,
    link,
} = styles;

function Navbar() {
    const { t } = useTranslation("navbar");
    const [checked, setChecked] = React.useState(false);
    const checkHandler = () => {
        setChecked(!checked);
    };
    return (
        <div className={navigationContainer}>
            <nav className={mobileNav}>
                <Logo />
                <input
                    className={menuToggle}
                    type="checkbox"
                    id="test"
                    checked={checked}
                    onChange={() => checkHandler()}
                />
                <label className={menuButtonContainer} htmlFor="test">
                    <div className={menuButton} />
                </label>
                <ul className={menu}>
                    <li className={menuItem}>
                        <Link className={link} href="/">
                            {t("aboutus")}
                        </Link>
                    </li>
                    <li className={menuItem}>
                        <LinkButton to="/login" className="Secondary">
                            {t("login")}
                        </LinkButton>
                        <LinkButton to="/signup" className="Primary">
                            {t("signup")}
                        </LinkButton>
                    </li>
                </ul>
            </nav>
            <DeskTopNav />
        </div>
    );
}

export default Navbar;
