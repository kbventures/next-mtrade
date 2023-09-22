/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, FormEvent } from "react";
import { useTranslation } from "next-i18next";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Logo from "@/components/Logo/index";
import LanguageSelector from "@/components/LanguageSelector";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "./login.module.scss";

const {
    authLayout,
    authLayoutHeader,
    authLayoutContent,
    authLayoutHeaderRight,
    baseLinkButton,
    loginSeperator,
    loginForm,
    warning,
    title,
    label,
    cursor,
    loginInput,
    button,
    // Error,
    link,
    ReadMoreLink,
    LinkText,
} = styles;

function Login() {
    const { t } = useTranslation("login");
    const [username_, setUserName] = useState("");
    const [password_, setPassword] = useState("");
    // const { login, error, isLoading } = useLogin();
    // const isLoading = true;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore comment
    // eslint-disable-next-line consistent-return
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // const form = new FormData(e.target as HTMLFormElement);
        const res = await fetch("/api/login", {
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
            callbackUrl: "/",
        });
    }

    return (
        <div className={authLayout}>
            <div className={authLayoutHeader}>
                <div className={authLayoutHeader}>
                    <Logo />
                    <div className={authLayoutHeaderRight}>
                        {/* <Link to="/signup" className={baseLinkButton}>
                                                        {t('signup')}
                                                </Link> */}
                        <Link href="/signup" className={baseLinkButton}>
                            {t("signup")}
                        </Link>
                        {/* <LanguageSelector /> */}
                        <LanguageSelector />

                        {/* <button type="button">English</button> */}
                    </div>
                </div>
            </div>
            <div className={loginSeperator} />
            <div className={authLayoutContent}>
                <form className={loginForm} onSubmit={handleSubmit}>
                    <h1 className={title}>{t("login")}</h1>
                    <p className={warning}>{t("visitingSiteWarning")}</p>
                    <label htmlFor="username" className={label}>
                        {t("username")}
                        <div className={cursor}>
                            <input
                                className={loginInput}
                                type="text"
                                onChange={e => setUserName(e.target.value)}
                                value={username_}
                                placeholder={t("userNamePlaceHolder")}
                            />
                            <i />
                        </div>
                    </label>
                    <label htmlFor="password" className={label}>
                        {t("password")}
                        <div className={cursor}>
                            <input
                                className={loginInput}
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password_}
                                placeholder={t("password")}
                            />
                            <i />
                        </div>
                    </label>
                    <button
                        className={button}
                        type="submit"
                        // disabled={isLoading}
                    >
                        {t("login")}
                    </button>
                    <Link href="/forgotpassword" className={link}>
                        <div className={ReadMoreLink}>
                            <p className={LinkText}>{t("forgotPassword")}</p>
                        </div>
                    </Link>
                    {/* {error && <div className={Error}>{error}</div>} */}
                </form>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, "login")),
            // Will be passed to the page component as props
        },
    };
}

export default Login;
