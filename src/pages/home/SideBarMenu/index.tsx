import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faKey,
    faTrophy,
    faLock,
    faChartLine,
    faChartPie,
    faArrowTrendUp,
    faEnvelope,
    faBriefcase,
    faBullhorn,
    faCircleQuestion,
    faLightbulb,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";
import styles from "./side-bar-menu.module.scss";

const {
    settingsSideNav,
    accountSettingsSideNavWrapper,
    accountSettingsSideNavList,
    accountSettingsSideNavListSub,
    accountSettingsSideNavListItem,
    svg,
    active,
    icon,
} = styles;

export default function Index() {
    const router = useRouter();

    // Function to check if a given path matches the current route
    const isActive = (href: string) => {
        return router.pathname === href ? active : "";
    };
    return (
        <div>
            <div className={settingsSideNav}>
                <div className={accountSettingsSideNavWrapper}>
                    <div className={accountSettingsSideNavList}>
                        <Link
                            href="/home"
                            className={`${accountSettingsSideNavListItem} ${isActive(
                                "/home"
                            )}`}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faUser}
                                className={svg}
                            />
                            Account
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faKey}
                                className={svg}
                            />
                            API Zi Zi Zi Key
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/home/trades"
                            className={`${accountSettingsSideNavListItem} ${isActive(
                                "/home/trades"
                            )}`}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faArrowTrendUp}
                                className={svg}
                            />
                            Trades
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faLock}
                                className={svg}
                            />
                            Security
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faEnvelope}
                                className={svg}
                            />
                            Notifications
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faTrophy}
                                className={svg}
                            />
                            Leaderboard
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faChartLine}
                                className={svg}
                            />
                            Trade Analysis
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faChartPie}
                                className={svg}
                            />
                            Reports
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                    </div>
                    <div className={accountSettingsSideNavListSub}>
                        <Link
                            href="/"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faLightbulb}
                                className={svg}
                            />
                            Knowledge Base
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faCircleQuestion}
                                className={svg}
                            />
                            Support
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faBullhorn}
                                className={svg}
                            />
                            Annoucements
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faBriefcase}
                                className={svg}
                            />
                            Career
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
