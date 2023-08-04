import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";
import styles from "./nav-bar.module.scss";
import SideBarMenuOnClick from "./SideBarMenuOnClick/index";

const {
    navigationContainer,
    mobileNav,
    greaterThan,
    leftContainer,
    userButton,
    toggleButton,
    sideBar,
    open,
    dropDown,
    dropDownMenu,
    dropDownMenuItem,
    divider,
    rightContainer,
} = styles;

function Navbar() {
    const { t } = useTranslation("navbar");
    const [isOpen, setIsOpen] = useState(false);
    const [openUser, setOpenUser] = useState(false);

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleUserOpen = () => {
        setOpenUser(!openUser);
    };

    const handleLogout = () => {
        signOut();
    };

    const menuItems = [
        { className: dropDownMenuItem, name: t("account"), route: "/home" },
        { className: dropDownMenuItem, name: t("apiKeys"), route: "/home/api" },
        { className: dropDownMenuItem, name: "Trades", route: "/home/trades" },
        { className: dropDownMenuItem, name: "Security" },
        { className: dropDownMenuItem, name: "Notifications" },
        { className: dropDownMenuItem, name: "Leaderboard" },
        { className: dropDownMenuItem, name: "Trade Analysis" },
        { className: divider, name: "" },
        { className: dropDownMenuItem, name: "Reports" },
        { className: divider, name: "" },
        // Language selector added as a menu item
        {
            className: `${dropDownMenuItem} logoutButton`,
            name: <LanguageSelector />, // Render LanguageSelector component
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            action: () => {}, // No action needed here as Language Selector uses internal logic
        },
        {
            className: dropDownMenuItem,
            name: "Logout",
            action: handleLogout, // Trigger logout function for the Logout option
        },
    ];

    return (
        <div className={navigationContainer}>
            <nav className={mobileNav}>
                <div className={leftContainer}>
                    <div className={`${sideBar} ${isOpen ? open : ""}`}>
                        <SideBarMenuOnClick />
                    </div>
                    <button
                        type="button"
                        className={toggleButton}
                        onClick={handleToggleSidebar}
                    >
                        <FontAwesomeIcon
                            size="2x"
                            color="rgb(255, 255, 255)"
                            icon={faGreaterThan}
                            className={`${greaterThan} ${
                                isOpen ? styles.open : ""
                            }`}
                            style={{
                                transform: `rotate(${
                                    isOpen ? "180deg" : "0deg"
                                })`,
                            }}
                        />
                    </button>
                    <Logo />
                </div>
                <div className={rightContainer}>
                    <div
                        className={dropDown}
                        onMouseEnter={handleUserOpen}
                        onMouseLeave={handleUserOpen}
                    >
                        <button className={userButton} type="button">
                            <FontAwesomeIcon
                                className={userButton}
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faUser}
                            />
                        </button>
                        {openUser && (
                            <ul className={dropDownMenu}>
                                {menuItems.map((menu, index) => (
                                    <li
                                        className={menu.className}
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={index}
                                        data-value={menu.name}
                                        aria-hidden="true"
                                        onClick={menu.action} // Assign click handler directly to the li element
                                        onKeyDown={e => {
                                            if (
                                                e.key === "Enter" ||
                                                e.key === "Space"
                                            ) {
                                                // eslint-disable-next-line no-unused-expressions
                                                menu.action && menu.action(); // Trigger action on 'Enter' or 'Space' key press
                                            }
                                        }}
                                        role={
                                            menu.action ? "button" : undefined
                                        } // Add 'role="button"' if there's a click action
                                        tabIndex={menu.action ? 0 : undefined} // Add tabIndex to make element focusable
                                    >
                                        {menu.route ? (
                                            <Link href={menu.route}>
                                                {menu.name}
                                            </Link>
                                        ) : (
                                            <span>{menu.name}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
