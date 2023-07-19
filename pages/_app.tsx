import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "../styles/auth.css";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <Component {...pageProps} />
        </SessionProvider>
    );
}
