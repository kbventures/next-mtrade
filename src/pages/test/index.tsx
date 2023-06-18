import type { NextPage } from "next";
import Translation from "@/components/Translation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react"; // Make sure you import React

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
    return <Translation />;
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
