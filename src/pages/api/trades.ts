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
            "f8797c61-acf3-4157-9332-8e0eea186541": "kraken",
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
                console.log(tradesByExchangeAndApiKey);
            }
        }
        res.status(200).json(tradesByExchangeAndApiKey);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching API keys: ${error.message}`);
        } else {
            throw new Error(`Error fetching API keys: Unknown error occurred`);
        }
    }
}
