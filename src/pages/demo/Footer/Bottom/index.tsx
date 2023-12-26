import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faTwitter,
    faTelegram,
    faInstagram,
    faLinkedin,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "next-i18next";
import styles from "./bottom.module.scss";

const { FooterBottom, FooterContainer, FooterSection, Social, span } = styles;

function Bottom() {
    const { t } = useTranslation();
    return (
        <div className={FooterBottom}>
            <div className={FooterContainer}>
                <div className={FooterSection}>
                    <div className={Social}>
                        <Link className="link" href="/">
                            <span className={span}>
                                <FontAwesomeIcon
                                    size="2x"
                                    color="rgb(255, 255, 255)"
                                    icon={faDiscord}
                                />
                            </span>
                        </Link>
                        <Link href="/">
                            <span className={span}>
                                <FontAwesomeIcon
                                    size="2x"
                                    color="rgb(255, 255, 255)"
                                    icon={faTwitter}
                                />
                            </span>
                        </Link>
                        <Link href="/">
                            <span className={span}>
                                <FontAwesomeIcon
                                    size="2x"
                                    color="rgb(255, 255, 255)"
                                    icon={faTelegram}
                                />
                            </span>
                        </Link>
                        <Link href="/">
                            <span className={span}>
                                <FontAwesomeIcon
                                    size="2x"
                                    color="rgb(255, 255, 255)"
                                    icon={faInstagram}
                                />
                            </span>
                        </Link>
                        <Link href="/">
                            <span className={span}>
                                <FontAwesomeIcon
                                    size="2x"
                                    color="rgb(255, 255, 255)"
                                    icon={faLinkedin}
                                />
                            </span>
                        </Link>
                        <Link href="/">
                            <span className={span}>
                                <FontAwesomeIcon
                                    size="2x"
                                    color="rgb(255, 255, 255)"
                                    icon={faTwitter}
                                />
                            </span>
                        </Link>
                        <Link href="/">
                            <span className={span}>
                                <FontAwesomeIcon
                                    size="2x"
                                    color="rgb(255, 255, 255)"
                                    icon={faFacebook}
                                />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className={FooterSection}>{t("Copywright")}</div>
            </div>
        </div>
    );
}
export default Bottom;
