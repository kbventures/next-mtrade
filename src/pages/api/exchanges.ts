import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
// import { getSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
// import authOptions from "./auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const token = await getToken({ req });
    if (token) {
        // Signed in
        console.log("JSON Web Token", JSON.stringify(token, null, 2));
    }

    console.log("token sub", token?.sub)
    // const session1 = await getServerSession(req, res, authOptions);
    // // const session = await getServerSession(req);
    // if (session1) {
    //     // Signed in
    //     console.log("Session", JSON.stringify(session1, null, 2));
    // }
    // const session = await getSession();
    // // eslint-disable-next-line no-console
    // console.log("getServerSession", session1);
    // console.log("valid", typeof session1);
    // const userId = session?.user.id;
    // eslint-disable-next-line no-console
    // console.log("userId", userId);

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
        const { publicKey, secretKey, exchangeId } = req.body;
        // eslint-disable-next-line no-console
        // console.log("post", publicKey, secretKey, exchangeId, userId);
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
                    userId: token?.sub || "", // Ensure userId is never undefined
                },
            });
            // eslint-disable-next-line no-console
            console.log("newApi", newApi);
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
