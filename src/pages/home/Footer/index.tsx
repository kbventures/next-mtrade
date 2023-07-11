import React from "react";
import styles from "./footer.module.scss";
import Bottom from "./Bottom/index";

const { FooterWrapper } = styles;

export default function index() {
    return (
        <div>
            {/* <FooterExtra /> */}
            <div className={FooterWrapper}>
                {/* <FooterTop />
                                <FooterContent /> */}
                <Bottom />
            </div>
        </div>
    );
}
