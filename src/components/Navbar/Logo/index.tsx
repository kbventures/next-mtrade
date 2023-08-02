import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/about.png";
import styles from "./logo.module.scss";

const { authLayoutLogo, authLogoPartOne, authLogoPartTwo, mTradeLogo } = styles;

export default function Logo() {
    return (
        <Link style={{ textDecoration: "none" }} href="/">
            <div className={authLayoutLogo}>
                <span className={authLogoPartOne}>M</span>
                <span className={authLogoPartTwo}>Trade</span>
                <Image // Use NextImage instead of img
                    className={mTradeLogo}
                    alt="Mindfulness Trade Logo"
                    src={logo}
                    width={100} // Set the desired width (replace with the actual width of the image)
                    height={100} // Set the desired height (replace with the actual height of the image)
                />
            </div>
            ;
        </Link>
    );
}
