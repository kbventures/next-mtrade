import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import ccxt from "ccxt";
import { Trade } from "../../types/trade"; // Import the Trade type

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const apiKeys = await prisma.apiKey.findMany();

        // Use a Map to store exchange name and trades array
        const exchangeNameTradesArrayMap: Map<string, Trade[]> = new Map();

        // eslint-disable-next-line no-restricted-syntax
        for (const { publicKey, secretKey, exchangeName } of apiKeys) {
            const tempApiKey = publicKey;
            const tempSecret = secretKey;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const currentExchange = new (ccxt as any)[
                exchangeName.toLowerCase()
            ]({
                apiKey: tempApiKey,
                secret: tempSecret,
            });

            const trades: Trade[] =
                // eslint-disable-next-line no-await-in-loop
                (await currentExchange.fetchClosedOrders()) as Trade[];

            // Get existing trades array for the exchangeName
            let existingTrades =
                exchangeNameTradesArrayMap.get(exchangeName) || [];

            // Append newly fetched trades to existing trades array
            existingTrades = [...existingTrades, ...trades];

            // Update the Map with aggregated trades for the exchangeName
            exchangeNameTradesArrayMap.set(exchangeName, existingTrades);
        }

        // Convert Map to plain object for JSON response
        const tradesByExchangeAndApiKey: Record<string, Trade[]> = {};
        exchangeNameTradesArrayMap.forEach((trades, exchangeName) => {
            tradesByExchangeAndApiKey[exchangeName] = trades;
        });

        res.status(200).json(tradesByExchangeAndApiKey);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching API keys: ${error.message}`);
        } else {
            throw new Error(`Error fetching API keys: Unknown error occurred`);
        }
    }
}
