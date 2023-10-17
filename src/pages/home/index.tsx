import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "./Footer/index";
import styles from "./home.module.scss";
import SideBarMenu from "./SideBarMenu/index";
import NavBar from "./NavBar";

const {
    headerWrapper,
    mainContainer,
    content,
    mainSideNav,
    accountSettingsWrapper,
    accountSettingsTitle,
    settingsTabHeader,
    settingsTabHeaderTitle,
    settingsTabsContent,
    // userSettingsItemWrapper,
    // userSettingsItemLabel,
    // userSettingsItemContent,
    // userSettingsItemValue,
    // userSettingsItemRightContent,
    // userSettingsItemRightButton,
} = styles;

export default function Home() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push("/"); // Redirect to the homepage if not authenticated
        }
    }, [session, router]);

    if (!session) {
        return null; // Return null to prevent rendering if not authenticated
    }

    return (
        <div>
            <div className={headerWrapper}>
                <NavBar />
            </div>
            <div className={mainContainer}>
                <div className={content}>
                    <SideBarMenu />
                    <div className={mainSideNav}>
                        <div className={accountSettingsWrapper}>
                            <h4 className={accountSettingsTitle}>Account</h4>
                            <div className={settingsTabHeader}>
                                <div className={settingsTabHeaderTitle}>
                                    Account
                                </div>
                            </div>
                            <div className={settingsTabsContent}>
                                {/* ... Rest of your component */}
                            </div>
                        </div>
                    </div>
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
};