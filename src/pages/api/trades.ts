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

        // Array to store all trades
        const allTrades: Trade[] = [];

        for (const { publicKey, secretKey, exchangeName } of apiKeys) {
            // Create an instance of the exchange
            const currentExchange = new (ccxt as any)[exchangeName.toLowerCase()]({
                apiKey: publicKey,
                secret: secretKey,
            });

            // Fetch closed orders for the exchange
            const tradesFromExchange = await currentExchange.fetchClosedOrders();

            // Add the exchange name to each trade
            tradesFromExchange.forEach((trade: Trade) => {
                trade.exchange = exchangeName;
                allTrades.push(trade);
            });
        }
        console.log("alltrades",allTrades)
        res.status(200).json(allTrades);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching API keys: ${error.message}`);
        } else {
            throw new Error(`Error fetching API keys: Unknown error occurred`);
        }
    }
}
