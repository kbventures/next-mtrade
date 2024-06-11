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
    errorStyle,
} = styles;

function AddApi() {
    const { t } = useTranslation("api-keys");
    const [keyAlias__, setKeyAlias] = useState("");
    const [publicKey__, setPublicKey] = useState("");
    const [secretKey__, setSecretKey] = useState("");
    const [exchange__, setExchange] = useState("");
    const [exchanges, setExchanges] = useState<Exchange[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const res = await fetch("/api/exchanges");
                const data = await res.json();
                setExchanges(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(`Error fetching Exchanges: ${err.message}`);
                } else {
                    setError("Unknown error occured");
                }
            }
        };

        fetchExchanges();
    }, []);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!publicKey__ || !secretKey__ || !exchange__ || !keyAlias__) {
            // STUB
            // Handle validation error, show a message or disable the submit button
        }

        try {
            await fetch("/api/exchanges", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    keyAlias: keyAlias__,
                    publicKey: publicKey__,
                    secretKey: secretKey__,
                    exchangeName: exchange__,
                }),
            });
        } catch (err) {
            if (err instanceof Error) {
                setError(`Error fetchin exchange: ${err.message}`);
            } else {
                setError("Unknown error occured");
            }
        }

        setPublicKey("");
        setSecretKey("");
        setExchange("");
        setKeyAlias("");
    }

    const exchangeOptions = exchanges.map(exch => (
        <option key={exch.id} value={exch.name}>
            {exch.name}
        </option>
    ));

    return (
        <div className={authLayout}>
            <div className={loginSeperator} />
            <div className={authLayoutContent}>
                {error && <div className={errorStyle}>{error}</div>}
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
