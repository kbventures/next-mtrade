import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ApiKey } from "@/types/apiKey";
import Image from "next/image";
import styles from "./add-api.module.scss";

const { authLayout, authLayoutContent, loginSeparator, exchangeIcon } = styles;

function AddApi() {
    const router = useRouter();
    const [apiKeys, setApiKeys] = useState<Array<ApiKey>>([]);
    const [error, setError] = useState<string | null>(null);

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
                if (err instanceof Error) {
                    setError(`Error fetching API keys: ${err.message}`);
                } else {
                    setError("Unknown error occurred");
                }
            }
        };

        fetchApiKeys();
    }, [router]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={authLayout}>
            <div className={loginSeparator} />
            <div className={authLayoutContent}>
                {apiKeys.map(apiKey => (
                    <div key={apiKey.id} className={exchangeIcon}>
                        {apiKey && apiKey.exchangeId && (
                            <Image
                                src={`/${apiKey.exchangeId}.png`}
                                alt={apiKey.exchangeId}
                                width={125}
                                height={125}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddApi;
