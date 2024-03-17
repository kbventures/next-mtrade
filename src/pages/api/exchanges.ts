import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const token = await getToken({ req });

    if (req.method === "GET") {
        try {
            const exchanges = await prisma.exchange.findMany();
            res.status(200).json(exchanges);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Error fetching exchanges:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else if (req.method === "POST") {
        const { keyAlias, publicKey, secretKey, exchangeId } = req.body;
        const id = "haha";
        try {
            const newApi = await prisma.apiKey.create({
                data: {
                    id,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    keyAlias,
                    publicKey,
                    secretKey,
                    exchangeId,
                    userId: token?.sub || "",
                },
            });
            res.status(201).json(newApi);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
