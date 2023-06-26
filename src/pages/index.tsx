import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
    const { data, status } = useSession();
    // console.log("data index.js page", data);
    // console.log("status index.js page", status);
    return (
        <div>
            <h1>Hello World</h1>
            <Link href="/test">French</Link>
            {status === "authenticated" && data !== null && (
                <>
                    <h2>Welcome {data.user.username}</h2>
                    <p>User ID: {data.user.id}</p>
                    {JSON.stringify(data.user)}
                    <button type="button" onClick={() => signOut()}>
                        Sign out
                    </button>
                </>
            )}
            <Footer />
        </div>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
