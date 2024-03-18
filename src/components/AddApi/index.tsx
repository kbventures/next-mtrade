/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, FormEvent, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Exchange } from "@/types/exchange";
import { useSession } from "next-auth/react";
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
    const { data: session } = useSession();
    const { t } = useTranslation("api-keys");
    const [publicKey__, setPublicKey] = useState("");
    const [secretKey__, setSecretKey] = useState("");
    const [exchange__, setExchange] = useState("");
    const [exchanges, setExchanges] = useState<Exchange[]>([]);

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const res = await fetch("/api/exchanges"); // Adjust the endpoint accordingly
                const data = await res.json();

                // Log the content of the fetched data to the console
                // eslint-disable-next-line no-console
                console.log("Fetched Exchanges Data:", data);
                setExchanges(data);
            } catch (error) {
                // Behavior needs to be implemented
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
        if (!publicKey__ || !secretKey__ || !exchange__) {
            // Handle validation error, show a message or disable the submit button
            // to be created later
            // eslint-disable-next-line no-console
            console.group(
                " publicKey__, secretKey__, exchange__ not defined!",
                publicKey__,
                secretKey__,
                exchange__,
                session?.user.id
            );
        }
        // eslint-disable-next-line no-console
        console.group(
            "Checking data exisits before try sending",
            publicKey__,
            secretKey__,
            exchange__,
            session?.user.id
        );
        const userId = session?.user.id;
        try {
            // const { username } = session.user || null; // Extract the access token from the session
            const { user } = session || {};
            // eslint-disable-next-line no-console
            console.log("Before fetch request", user);
            const res = await fetch("/api/exchanges", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    publicKey: publicKey__,
                    secretKey: secretKey__,
                    exchangeId: exchange__,
                    userId,
                }),
            });
            // eslint-disable-next-line no-console
            console.log("After fetch request");

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
                                id="exchange" // Change this to "exchange"
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
