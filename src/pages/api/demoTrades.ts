// API documentation: https://docs.kraken.com/rest/#tag/Account-Data/operation/getTradeHistory
import { NextApiRequest, NextApiResponse } from "next";
// eslint-disable-next-line import/no-unresolved
import { KrakenClosedTrade } from "@/types/apiTypes";
import mockClosedTrades from "@/mockData/mockClosedTrades";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<KrakenClosedTrade[] | { message: string }>
) {
    if (req.method === "GET") {
        res.status(200).json(mockClosedTrades);
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
