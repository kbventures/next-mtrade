import React, { ReactNode } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./link-button.module.scss";

interface LinkButtonProps {
    to: string;
    children: ReactNode; // Use ReactNode type for children prop
    className?: string;
    otherClassName?: string;
}

function LinkButton({
    to,
    children,
    className,
    otherClassName,
}: LinkButtonProps) {
    // eslint-disable-next-line security/detect-object-injection
    const linkButtonClass = `${styles.baseLinkButton} ${
        styles[className ?? ""]
    } ${styles[otherClassName ?? ""]}`;

    return (
        <Link className={styles.link} href={to}>
            <p className={linkButtonClass}>{children}</p>
        </Link>
    );
}

export default LinkButton;

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    otherClassName: PropTypes.string,
};

LinkButton.defaultProps = {
    className: "",
    otherClassName: "",
};
