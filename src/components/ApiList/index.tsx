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
                console.log("data", data[0].id);
                if (data.length === 0) {
                    router.push("/home/addApiKeys");
                }
            } catch (err) {
                console.error("Error fetching API keys:", err);
            }
        };

        fetchApiKeys();
    }, [router]);

    console.log("Fetched apiKeys:", apiKeys[0]);
    // {
    //     "id": "clu0coux50007p90ubwrc094p",
    //     "keyAlias": "Testing Commex",
    //     "publicKey": "5A4D1D25AE95EB502061C061CAB3E3AB50A76CAC7D89FA3A4EB0B1E1157C1415",
    //     "secretKey": " D598291CF01C76F70A73FAAF52B18B184AAFDDAD4F80356C0CB30162FCE5841A",
    //     "exchangeId": "dcbb440d-4cc0-48a1-86ee-da6423c10b82",
    //     "userId": "clu065u500000nr0urzoubjek"
    // }

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
