// import { useSession, signOut } from "next-auth/react";
// import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data, status } = useSession();
    console.log("data index.js page", data);
    console.log("status index.js page", status);
    return (
        <div>
            {status === "authenticated" && data !== null && (
                <>
                    <h2>Welcome {data.user.username}</h2>
                    <p>User ID: {data.user.id}</p>
                    {JSON.stringify(data.user)}
                    {/* <button type="button" onClick={() => signOut()}>
                        Sign out
                    </button> */}
                </>
            )}
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "features",
                "hero",
                "navbar",
            ])),
            // Will be passed to the page component as props
        },
    };
}
