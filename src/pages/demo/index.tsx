// import { useSession } from "next-auth/react";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "./Footer/index";
import styles from "./demo.module.scss";
import SideBarMenu from "./SideBarMenu/index";
import NavBar from "./NavBar";
import MainSideNav from "./MainSideNav";

const { headerWrapper, mainContainer, content } = styles;

export default function Home() {
    // const { data: session } = useSession();
    // const router = useRouter();

    // useEffect(() => {
    //     if (!session) {
    //         router.push("/"); // Redirect to the homepage if not authenticated
    //     }
    // }, [session, router]);

    // if (!session) {
    //     return null; // Return null to prevent rendering if not authenticated
    // }
    return (
        <div>
            <div className={headerWrapper}>
                <NavBar />
            </div>
            <div className={mainContainer}>
                <div className={content}>
                    <SideBarMenu />
                    <MainSideNav />
                </div>
            </div>
            <Footer />
        </div>
    );
}

// export async function getServerSideProps({ locale }: { locale: string }) {
//     // Fetch data from your API here and pass it as props
//     //   const userData = await fetchDataFromAPI()

//     return {
//         props: {
//             ...(await serverSideTranslations(locale, "test")),
//         },
//     };
// }

export async function getServerSideProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "side-nav",
                "main-side-nav",
                "navbar",
            ])),
        },
    };
}
