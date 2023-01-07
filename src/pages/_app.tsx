import type { AppProps, AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import "@/styles/global.css";
import "@/styles/global.module.scss";
import "@/styles/theme.css";
import "@/styles/fonts.css";
import React from "react";
import { appWithTranslation } from "next-i18next";

// eslint-disable-next-line react/function-component-definition
const App: AppType = ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default appWithTranslation(App);
