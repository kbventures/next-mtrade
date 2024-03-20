import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ApiKey } from "@/types/apiKey";
import styles from "./add-api.module.scss";

const { authLayout, authLayoutContent, loginSeparator, exchangeIcon } = styles;

function AddApi() {
    const router = useRouter();
    const [apiKeys, setApiKeys] = useState<Array<ApiKey>>([]);

    useEffect(() => {
        const fetchApiKeys = async () => {
            try {
                const res = await fetch("/api/api-keys");
                if (!res.ok) {
                    throw new Error("Failed to fetch API keys");
                }
                const data = await res.json();
                setApiKeys(data);
                if (data.length === 0) {
                    router.push("/home/addApiKeys");
                }
            } catch (err) {
                console.error("Error fetching API keys:", err);
            }
        };

        fetchApiKeys();
    }, [router]);

    console.log("Fetched apiKeys:", apiKeys);

    return (
        <div className={authLayout}>
            <div className={loginSeparator} />
            <div className={authLayoutContent}>
                {apiKeys.map(apiKey => (
                    <div key={apiKey.id} className={exchangeIcon}>
                        {apiKey && apiKey.exchangeId && (
                            <img src={require(`@/images/${apiKey.exchangeId}.png`).default} alt={apiKey.keyAlias} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddApi;
