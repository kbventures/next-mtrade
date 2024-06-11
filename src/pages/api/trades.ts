import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import ccxt, { Trade, exchanges } from "ccxt";

const prisma = new PrismaClient();

type ModifiedTrades = (Trade & { exchange: string })[];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const apiKeys = await prisma.apiKey.findMany();

        const allTrades: ModifiedTrades = [];

        const promises = apiKeys.map(
            async ({ publicKey, secretKey, exchangeName }) => {
                // Create an instance of the exchange
                const currentExchange = new ccxt[
                    exchangeName.toLowerCase() as keyof typeof exchanges
                ]({
                    apiKey: publicKey,
                    secret: secretKey,
                });

                // Fetch closed orders for the exchange
                const tradesFromExchange =
                    await currentExchange.fetchMyTrades();

                // Create a new array with modified trades
                const modifiedTrades = tradesFromExchange.map(
                    trade =>
                        ({
                            ...trade,
                            exchange: exchangeName,
                        } as ModifiedTrades[number])
                );

                // Push modified trades to allTrades
                allTrades.push(...modifiedTrades);
            }
        );

        await Promise.all(promises);
        res.status(200).json(allTrades);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching API keys: ${error.message}`);
        } else {
            throw new Error(`Error fetching API keys: Unknown error occurred`);
        }
    }
}
