/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, FormEvent } from "react";
import { useTranslation } from "next-i18next";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Logo from "@/components/Logo/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import LanguageSelector from "./LanguageSelector/index";
import styles from "./signup.module.scss";

const {
    authLayout,
    authLayoutHeader,
    authLayoutContent,
    authLayoutHeaderRight,
    baseLinkButton,
    loginSeperator,
    loginForm,
    title,
    label,
    cursor,
    loginInput,
    button,
    // link,
    // ReadMoreLink,
    // LinkText,
} = styles;

function Signup() {
    const { t } = useTranslation("signup");
    const [username_, setUserName] = useState("");
    const [password_, setPassword] = useState("");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore comment
    // eslint-disable-next-line consistent-return
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // const form = new FormData(e.target as HTMLFormElement);
        const res = await fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username_,
                password: password_,
            }),
        });
        const data = await res.json();
        if (!data.user) return null;
        await signIn("credentials", {
            username: data.user.username,
            password: password_,
            callbackUrl: "/home",
        });
    }

    return (
        <div className={authLayout}>
            <div className={authLayoutHeader}>
                <div className={authLayoutHeader}>
                    <Logo />
                    <div className={authLayoutHeaderRight}>
                        <Link href="/login" className={baseLinkButton}>
                            {t("login")}
                        </Link>
                        <LanguageSelector />
                    </div>
                </div>
            </div>
            <div className={loginSeperator} />
            <div className={authLayoutContent}>
                <form className={loginForm} onSubmit={handleSubmit}>
                    <h1 className={title}>{t("signup")}</h1>
                    {/* <label className={label}>
                        {t("email")}
                        <div className={cursor}>
                            <input
                                className={loginInput}
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                placeholder={t("emailPlaceholder")}
                            />
                        </div>
                    </label> */}
                    <label htmlFor="username" className={label}>
                        {t("userName")}
                        <div className={cursor}>
                            <input
                                id="username"
                                className={loginInput}
                                type="text"
                                onChange={e => setUserName(e.target.value)}
                                value={username_}
                                placeholder={t("userNamePlaceholder")}
                            />
                        </div>
                    </label>
                    <label htmlFor="password" className={label}>
                        {t("password")}
                        <div className={cursor}>
                            <input
                                id="password"
                                className={loginInput}
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password_}
                                placeholder={t("passwordPlaceholder")}
                            />
                        </div>
                    </label>
                    {/* <label className={label}>
                        {t("countryOfResidence")}
                        <div className={cursor}>
                            <input
                                className={loginInput}
                                type="text"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder={t("countryResidencePlaceholder")}
                            />
                            <CountryList />
                        </div>
                    </label> */}
                    {/* <label className={label}>
                        {t("countryOfResidence")}
                        <div className={cursor}>
                            <CountryList />
                        </div>
                    </label> */}
                    {/* <label className={label}>
                        {t("hearAbout")}
                        <div className={cursor}>
                            <input
                                className={loginInput}
                                type="text"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder={t("hearAboutPlaceholder")}
                            />
                            // <i />
                        </div>
                    </label> */}
                    {/* <label className={label}>
                        {t("referralCode")}
                        <div className={cursor}>
                            <input
                                className={loginInput}
                                type="text"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder={t("referralCodePlaceholder")}
                            />
                        </div>
                    </label> */}
                    <button
                        className={button}
                        type="submit"
                        // disabled={isLoading}
                    >
                        {t("signup")}
                    </button>
                    {/* <Link href="/forgotpassword" className={link}>
                        <div className={ReadMoreLink}>
                            <p className={LinkText}>{t("forgotPassword")}</p>
                        </div>
                    </Link> */}
                    {/* {error && <div className={Error}>{error}</div>} */}
                </form>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, "signup")),
        },
    };
}

export default Signup;
