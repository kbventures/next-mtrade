import { useSession } from "next-auth/react";
import { useRouter } from "next/router"; // Import the useRouter
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
    const { data, status } = useSession();
    const router = useRouter(); // Initialize the router

    if (status === "authenticated" && data !== null) {
        router.push("/home"); 
    }

    return (
        <div>
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
        },
    };
}

// import { signOut, useSession } from "next-auth/react";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Features from "@/components/Features";
// import Footer from "@/components/Footer";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export default function Home() {
//     const { data, status } = useSession();
//     // console.log("data index.js page", data.user.username);
//     // console.log("status index.js page", data?.user.id);
//     return (
//         <div>
//             {/* {status === "authenticated" && data !== null && (
//                 <>
//                     <h2>Welcome {data.user.username}</h2>
//                     <p>User ID: {data.user.id}</p>
//                     {JSON.stringify(data.user)}
//                     <button type="button" onClick={() => signOut()}>
//                         Sign out
//                     </button>
//                 </>
//             )} */}
//             <Navbar />
//             <Hero />
//             <Features />
//             <Footer />
//         </div>
//     );
// }
// }
