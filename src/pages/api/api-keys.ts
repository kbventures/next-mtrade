import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            const apikeys = await prisma.apiKey.findMany();
            // Extracting only id and exchangeId from each object
            const simplifiedApiKeys = apikeys.map(({ id, exchangeId }) => ({ id, exchangeId }));
            res.status(200).json(simplifiedApiKeys);
        } catch (error) {
            console.error("Error fetching Api Keys List:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
