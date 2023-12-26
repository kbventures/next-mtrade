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
import { useTranslation } from "next-i18next";
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
    const { t } = useTranslation("side-nav");
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
                            href="/demo"
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
                            {t("Account")}
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/demo"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faKey}
                                className={svg}
                            />
                            {t("KrakenApiKey")}
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/demo/trades"
                            className={`${accountSettingsSideNavListItem} ${isActive(
                                "/demo/trades"
                            )}`}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faArrowTrendUp}
                                className={svg}
                            />
                            {t("Trades")}
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/demo"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faLock}
                                className={svg}
                            />
                            {t("Security")}
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/demo"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faEnvelope}
                                className={svg}
                            />
                            {t("Notifications")}
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/demo"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faTrophy}
                                className={svg}
                            />
                            {t("Leaderboard")}
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/demo"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faChartLine}
                                className={svg}
                            />
                            {t("TradeAnalysis")}
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/demo"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faChartPie}
                                className={svg}
                            />
                            {t("Reports")}
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
                            href="/demo"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faLightbulb}
                                className={svg}
                            />
                            {t("KnowledgeBase")}
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/demo"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faCircleQuestion}
                                className={svg}
                            />
                            {t("Support")}
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/demo"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faBullhorn}
                                className={svg}
                            />
                            {t("Annoucements")}
                            <FontAwesomeIcon
                                size="xs"
                                color="rgb(255, 255, 255)"
                                icon={faCheck}
                                className={icon}
                            />
                        </Link>
                        <Link
                            href="/demo"
                            className={accountSettingsSideNavListItem}
                        >
                            <FontAwesomeIcon
                                size="1x"
                                color="rgb(255, 255, 255)"
                                icon={faBriefcase}
                                className={svg}
                            />
                            {t("Career")}
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
