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
            const simplifiedApiKeys = apikeys.map(
                ({ id, exchangeId, keyAlias }) => ({
                    id,
                    exchangeId,
                    keyAlias,
                })
            );
            console.log(simplifiedApiKeys);
            res.status(200).json(simplifiedApiKeys);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(
                    `Error fetching Api Keys List: ${error.message}`
                );
            } else {
                throw new Error("Unknown error occurred");
            }
        }
    } else {
        throw new Error("Method Not Allowed");
    }
}
