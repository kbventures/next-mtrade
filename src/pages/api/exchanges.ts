import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
// import { Session } from "next-auth";
// import { getSession } from "next-auth/react";

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
        // eslint-disable-next-line no-console
        const { publicKey, secretKey, exchangeId, userId } = req.body;
        // eslint-disable-next-line no-console
        console.log(publicKey, secretKey, exchangeId, userId);
        // eslint-disable-next-line no-console
        // const session: Session | null = await getSession({ req });
        // console.log("session test", session);
        // if (session == null) return;
        // const temp = session.user.username;
        // eslint-disable-next-line no-console
        // console.log(
        //     "Log Session object and session.user.username: ",
        //     session,
        //     temp
        // );

        try {
            const newApi = await prisma.apiKey.create({
                data: {
                    publicKey,
                    secretKey,
                    exchangeId,
                    userId,
                },
            });
            // eslint-disable-next-line no-console
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
