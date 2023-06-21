import type { AppProps, AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import "@/styles/global.scss";
import "@/styles/theme.css";
import "@/styles/fonts.css";
import "@/styles/auth.css";
import React from "react";
import { appWithTranslation } from "next-i18next";

// test
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

// import type { AppProps } from "next/app";
// import { SessionProvider } from "next-auth/react";
// import "@/styles/globals.css";
// import "@/styles/auth.css";
// import React from "react";

// export default function App({ Component, pageProps }: AppProps) {
//     return (
//         <SessionProvider>
//             {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
//             {/* @ts-ignore */}
//             <Component {...pageProps} />
//         </SessionProvider>
//     );
// }
