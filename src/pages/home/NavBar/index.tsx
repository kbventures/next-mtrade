import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/react";
import LanguageSelector from "@/components/LanguageSelector";
import Logo from "./Logo";
import styles from "./nav-bar.module.scss";
import SideBarMenuOnClick from "./SideBarMenuOnClick/index";
import Link from "next/link";

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
        { className: dropDownMenuItem, name: "Account", route: "/home" },
        { className: dropDownMenuItem, name: "API Key" },
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
                                {/* {menuItems.map((menu, index) => (
                                    <li
                                        className={menu.className}
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={index}
                                        data-value={menu.name}
                                        onClick={menu.action} // Assigning action to onClick event
                                        aria-hidden="true"
                                    >
                                        {menu.name}
                                    </li>
                                ))} */}
                                {menuItems.map((menu, index) => (
                                    <li
                                        className={menu.className}
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={index}
                                        data-value={menu.name}
                                        aria-hidden="true"
                                    >
                                        {menu.route ? (
                                            <Link href={menu.route}>
                                                {menu.name}
                                            </Link>
                                        ) : menu.action ? (
                                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                                            <span onClick={menu.action}>
                                                {menu.name}
                                            </span>
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
