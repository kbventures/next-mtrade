import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Trades from "@/components/Trades";
import Footer from "./Footer/index";
import styles from "./home.module.scss";
import SideBarMenu from "./SideBarMenu/index";
import NavBar from "./NavBar";
// import MainSideNav from "./MainSideNav";

const { headerWrapper, mainContainer, content, childTwo } = styles;

export default function Home() {
    return (
        <div>
            <div className={headerWrapper}>
                <NavBar />
            </div>
            <div className={mainContainer}>
                <div className={content}>
                    <SideBarMenu />
                    {/* <MainSideNav /> */}
                    <div className={childTwo}>
                        <Trades />
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
}
