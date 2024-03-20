/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, FormEvent, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Exchange } from "@/types/exchange";
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
    const { t } = useTranslation("api-keys");
    const [keyAlias__, setKeyAlias] = useState("");
    const [publicKey__, setPublicKey] = useState("");
    const [secretKey__, setSecretKey] = useState("");
    const [exchange__, setExchange] = useState("");
    const [exchanges, setExchanges] = useState<Exchange[]>([]);

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const res = await fetch("/api/api-keys");
                const data = await res.json();
                setExchanges(data);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error("Error fetching exchanges:", error);
            }
        };

        fetchExchanges();
    }, []);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore comment
    // eslint-disable-next-line consistent-return
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!publicKey__ || !secretKey__ || !exchange__ || !keyAlias__) {
            // STUB
            // Handle validation error, show a message or disable the submit button
        }

        // console.log(publicKey__, secretKey__, exchange__, typeof keyAlias__);
        try {
            const res = await fetch("/api/exchanges", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    keyAlias: keyAlias__,
                    publicKey: publicKey__,
                    secretKey: secretKey__,
                    exchangeId: exchange__,
                }),
            });
            const data = await res.json();
            // eslint-disable-next-line no-console
            console.log("form returned", data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Error submitting the form:", error);
        }

        // Reset form fields after submission if needed
        setPublicKey("");
        setSecretKey("");
        setExchange("");
        setKeyAlias("");
    }

    const exchangeOptions = exchanges.map(exch => (
        <option key={exch.id} value={exch.id}>
            {exch.name}
        </option>
    ));

    return (
        <div className={authLayout}>
            <div className={loginSeperator} />
            <div className={authLayoutContent}>
                <form className={loginForm} onSubmit={handleSubmit}>
                    <h1 className={title}>{t("apiKey")}</h1>
                    <label htmlFor="keyAlias" className={label}>
                        {t("keyAlias")}
                        <div className={cursor}>
                            <input
                                id="keyAlias"
                                className={loginInput}
                                type="text"
                                onChange={e => setKeyAlias(e.target.value)}
                                value={keyAlias__}
                                placeholder={t("keyAliasPlaceholder")}
                            />
                        </div>
                    </label>
                    <label htmlFor="publicKey" className={label}>
                        {t("publicKey")}
                        <div className={cursor}>
                            <input
                                id="publicKey"
                                className={loginInput}
                                type="password"
                                onChange={e => setPublicKey(e.target.value)}
                                value={publicKey__}
                                placeholder={t("publicKeyPlaceholder")}
                            />
                        </div>
                    </label>
                    <label htmlFor="secretKey" className={label}>
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
                                {exchangeOptions}
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
