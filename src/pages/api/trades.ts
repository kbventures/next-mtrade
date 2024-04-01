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
        // Initialize an object to store trades with associated API key information
        const tradesByExchangeAndApiKey: Record<string, { trades: unknown[] }> =
            {};

        // eslint-disable-next-line no-restricted-syntax
        for (const { publicKey, secretKey, exchangeId } of apiKeys) {
            let exchangeName = "";
            let apiKeyInfo = {};

            if (
                exchangeId === "dcbb440d-4cc0-48a1-86ee-da6423c10b82" ||
                exchangeId === "10e44c1c-0395-4c63-90ae-40d2e1f6f4f8"
            ) {
                exchangeName = "kraken";
                apiKeyInfo = { exchangeId, publicKey, secretKey, exchangeName };
            }
            // Need to be refactored to name instead of exchange id

            if (exchangeName !== "") {
                const exchange = new ccxt[apiKeyInfo.exchangeName]({
                    apiKey: apiKeyInfo.publicKey,
                    secret: apiKeyInfo.secretKey,
                });
                // eslint-disable-next-line no-await-in-loop
                const trades = await exchange.fetchClosedOrders();
                // eslint-disable-next-line no-await-in-loop
                // console.log(await exchange.fetchClosedOrders());

                // eslint-disable-next-line no-console
                // console.log("Trades is working?", trades);

                // Store trades along with API key information
                tradesByExchangeAndApiKey[apiKeyInfo.exchangeName] = {
                    trades,
                };
                // console.log(
                //     "tradesByExchangeApiKey",
                //     tradesByExchangeAndApiKey
                // );
            }
        }

        // res.status(200).json(tradesByExchangeAndApiKey);
        console.dir("har har", tradesByExchangeAndApiKey, { depth: null });
        res.status(200).json(tradesByExchangeAndApiKey);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching API keys: ${error.message}`);
        } else {
            throw new Error(`Error fetching API keys: Unknown error occurred`);
        }
    }
}
