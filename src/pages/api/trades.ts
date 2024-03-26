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

            if (exchangeId === "clu0coux50007p90ubwrc094p") {
                exchangeName = "commex";
                apiKeyInfo = { exchangeId, publicKey, secretKey };
            } else if (exchangeId === "clu8pug1z0001p90uik577s1l") {
                exchangeName = "kraken";
                apiKeyInfo = { exchangeId, publicKey, secretKey };
            }

            if (exchangeName !== "") {
                const exchange = new ccxt[exchangeName]({
                    apiKey: apiKeyInfo.publicKey,
                    secret: apiKeyInfo.secretKey,
                });

                // eslint-disable-next-line no-await-in-loop
                const trades = await exchange.fetchClosedOrders("DOT/USDT");

                // Store trades along with API key information
                tradesByExchangeAndApiKey[exchangeId] = {
                    exchangeId: apiKeys.exchangeId,
                    trades,
                };
            }
        }

        res.status(200).json(tradesByExchangeAndApiKey);
    } catch (error) {
        throw new Error(
            `Error fetching API keys: ${
                error instanceof Error
                    ? error.message
                    : "Unknown error occurred"
            }`
        );
    }
}
