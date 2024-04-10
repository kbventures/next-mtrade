// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// pages/api/trades.ts
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import ccxt from "ccxt";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const apiKeys = await prisma.apiKey.findMany();
        const tradesByExchangeAndApiKey: Record<string, { trades: unknown[] }> =
            {};
        // Hard coded exchange list.
        // Since we only have one valid sset of keys we're using it twice to demonstrate multi exchange use
        const exchangeNames = {
            "8ef70434-92f0-41dd-8df6-3e520129c34c": "kraken",
            "b154f528-91de-4206-8ba2-7958784d9124": "Binance",
            "91a4e04b-764f-48a9-b7e6-a66d0389f382": "Okex",
            "20f4d1a0-c5f4-46db-9010-689958e78921": "Derebit",
            "2ab5fd92-13f9-4882-b2fc-40697989ab71": "KuCoin",
            "901099d5-2e48-45e6-a160-3f2ae036f37c": "Coinbase",
        };
        let i = 0;
        // eslint-disable-next-line no-restricted-syntax
        for (const { publicKey, secretKey, exchangeId } of apiKeys) {
            // eslint-disable-next-line no-plusplus
            i++;
            // eslint-disable-next-line no-plusplus
            const currentExchangeName = exchangeNames[exchangeId];

            const apiKeyInfo = {
                exchangeId,
                publicKey,
                secretKey,
                currentExchangeName,
            };
            if (currentExchangeName !== "") {
                const tempApiKey = apiKeyInfo.publicKey;
                const tempSecret = apiKeyInfo.secretKey;
                const currentExchange = new ccxt[currentExchangeName]({
                    apiKey: tempApiKey,
                    secret: tempSecret,
                });
                // eslint-disable-next-line no-await-in-loop
                const trades = await currentExchange.fetchClosedOrders();
                // Since we are using kraken again to avoid overide we are incremeting
                tradesByExchangeAndApiKey[apiKeyInfo.currentExchangeName + i] =
                    {
                        trades,
                    };
            }
        }
        console.log("res", tradesByExchangeAndApiKey);
        res.status(200).json(tradesByExchangeAndApiKey);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching API keys: ${error.message}`);
        } else {
            throw new Error(`Error fetching API keys: Unknown error occurred`);
        }
    }
}
