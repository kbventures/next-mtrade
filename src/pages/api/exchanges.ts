import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
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
        const { publicKey, secretKey, exchangeId } = req.body;

        const session: Session | null = await getSession({ req });
        if (session == null) return;
        const temp = session.user.username;
        console.log(publicKey, secretKey, exchangeId, temp);

        try {
            const newApi = await prisma.apiKey.create({
                data: {
                    publicKey,
                    secretKey,
                    exchangeId,
                    userId: session.user.username,
                },
            });
            console.log(newApi);
            res.status(201).json(newApi);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Error creating exchange:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
