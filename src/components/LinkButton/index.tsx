import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./link-button.module.scss";

interface LinkButtonProps {
    to: string;
    children: string;
    className?: string;
    otherClassName?: string;
}

// eslint-disable-next-line react/function-component-definition
const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
    to,
    children,
    className = "",
    otherClassName = "",
}) => {
    // eslint-disable-next-line security/detect-object-injection
    const linkButtonClass = `${styles.baseLinkButton} ${styles[className]} ${styles[otherClassName]}`;

    return (
        <Link href={to}>
            <p className={linkButtonClass}>{children}</p>
        </Link>
    );
};

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
