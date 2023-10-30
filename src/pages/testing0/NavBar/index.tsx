// import { useTranslation } from "next-i18next";
import React, { useState } from "react";
// import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faGreaterThan,
    //     faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/react";
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
    //     searchWrap,
    //     searchInputWrap,
    //     magnifyingGlass,
} = styles;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    // eslint-disable-next-line no-console
    console.log(isOpen);

    const menuItems = [
        { className: dropDownMenuItem, name: "Account" },
        { className: dropDownMenuItem, name: "API Key" },
        { className: dropDownMenuItem, name: "Trades" },
        { className: dropDownMenuItem, name: "Security" },
        { className: dropDownMenuItem, name: "Notifications" },
        { className: dropDownMenuItem, name: "Leaderboard" },
        { className: dropDownMenuItem, name: "Trade Analysis" },
        { className: divider, name: "" },
        { className: dropDownMenuItem, name: "Reports" },
        { className: divider, name: "" },
        { className: dropDownMenuItem, name: "Logout" },
    ];

    const [openUser, setUserOpen] = useState(false);

    const handleUserOpen = () => {
        setUserOpen(!openUser);
    };

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
                    {/* <div className={searchWrap}>
                        <div className={searchInputWrap}>
                                <input type="input" />
                                <FontAwesomeIcon
                                        size="1x"
                                        className={magnifyingGlass}
                                        color="rgb(255, 255,255"
                                        icon={faMagnifyingGlass}
                                />
                        </div>
                </div> */}
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
                                {menuItems.map(menu => (
                                    <li
                                        className={menu.className}
                                        key={menu.name}
                                        data-value={menu.name}
                                        onClick={() => signOut()}
                                        aria-hidden="true"
                                    >
                                        {menu.name}
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
