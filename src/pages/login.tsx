/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Logo from "@/components/Logo/index";
import LanguageSelector from "@/components/LanguageSelector";
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
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { login, error, isLoading } = useLogin();
    const isLoading = true;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore comment
    const handleSubmit = async e => {
        e.preventDefault();

        // await login(email, password);
    };

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
                            Sign Up
                        </Link>
                        <LanguageSelector />
                        {/* <LanguageSelector /> */}

                        {/* <button type="button">English</button> */}
                    </div>
                </div>
            </div>
            <div className={loginSeperator} />
            <div className={authLayoutContent}>
                <form className={loginForm} onSubmit={handleSubmit}>
                    <h1 className={title}>{t("login")}</h1>
                    <p className={warning}>{t("visitingSiteWarning")}</p>
                    <label className={label}>
                        {t("email")}
                        <div className={cursor}>
                            <input
                                className={loginInput}
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                placeholder={t("emailPlaceholder")}
                            />
                            <i />
                        </div>
                    </label>
                    <label className={label}>
                        {t("password")}
                        <div className={cursor}>
                            <input
                                className={loginInput}
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder={t("password")}
                            />
                            <i />
                        </div>
                    </label>
                    <button
                        className={button}
                        type="submit"
                        disabled={isLoading}
                    >
                        {t("login")}
                    </button>
                    <Link href="/forgotpassword" className={link}>
                        <p className={ReadMoreLink}>
                            <p className={LinkText}>{t("forgotPassword")}</p>
                        </p>
                    </Link>
                    {/* {error && <div className={Error}>{error}</div>} */}
                </form>
            </div>
        </div>
    );
}

export default Login;
