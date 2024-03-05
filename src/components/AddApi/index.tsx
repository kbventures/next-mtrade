/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";
import styles from "./add-api.module.scss";

const {
    authLayout,
    authLayoutContent,
    loginSeperator,
    loginForm,
    title,
    label,
    cursor,
    loginInput,
    button,
} = styles;

function AddApi() {
    const { t } = useTranslation("api");
    const [publicKey__, setPublicKey] = useState("");
    const [secretKey__, setSecretKey] = useState("");
    const [exchange__, setExchange] = useState("");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore comment
    // eslint-disable-next-line consistent-return
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // const form = new FormData(e.target as HTMLFormElement);
        const res = await fetch("/api/apikeys", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                publicKey: publicKey__,
                secretKey: secretKey__,
            }),
        });
        const data = await res.json();
        if (!data.user) return null;
        await signIn("credentials", {
            username: data.user.username,
            password: secretKey__,
            callbackUrl: "/home",
        });
    }

    return (
        <div className={authLayout}>
            <div className={loginSeperator} />
            <div className={authLayoutContent}>
                <form className={loginForm} onSubmit={handleSubmit}>
                    <h1 className={title}>{t("apiKey")}</h1>
                    <label htmlFor="password" className={label}>
                        {t("publicKey")}
                        <div className={cursor}>
                            <input
                                id="publicKey"
                                className={loginInput}
                                type="password"
                                onChange={e => setPublicKey(e.target.value)}
                                value={secretKey__}
                                placeholder={t("publicKeyPlaceholder")}
                            />
                        </div>
                    </label>
                    <label htmlFor="password" className={label}>
                        {t("secretKey")}
                        <div className={cursor}>
                            <input
                                id="secretKey"
                                className={loginInput}
                                type="password"
                                onChange={e => setSecretKey(e.target.value)}
                                value={secretKey__}
                                placeholder={t("secretKeyPlaceholder")}
                            />
                        </div>
                    </label>
                    <label htmlFor="exchange" className={label}>
                        {t("exchange")}
                        <div className={cursor}>
                            <select
                                id="exchange"
                                className={loginInput}
                                onChange={e => setExchange(e.target.value)}
                                value={exchange__}
                            >
                                <option value="">{t("selectExchange")}</option>
                                <option value="option1">
                                    {t("exchangeOption1")}
                                </option>
                                <option value="option2">
                                    {t("exchangeOption2")}
                                </option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </label>
                    <button className={button} type="submit">
                        {t("addKey")}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddApi;
