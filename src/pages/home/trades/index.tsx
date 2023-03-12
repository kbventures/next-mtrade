// pages/home/trades/index.tsx

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TradesComponent from "@/components/Trades";
import Footer from "../Footer/index";
import styles from "../home.module.scss";
import SideBarMenu from "../SideBarMenu/index";
import NavBar from "../NavBar";

const { headerWrapper, mainContainer, content } = styles;

function TradesPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return; // Don't perform redirection while session is loading

        if (!session) {
            router.push("/"); // Redirect to the homepage if not authenticated
        }
    }, [session, router, status]);

    if (status === "loading") {
        // Optionally, display a loading indicator while session is loading
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={headerWrapper}>
                <NavBar />
            </div>
            <div className={mainContainer}>
                <div className={content}>
                    <SideBarMenu />
                    <TradesComponent /> {/* Render your TradesComponent */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export async function getServerSideProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, "common")),
        },
    };
}

export default TradesPage;