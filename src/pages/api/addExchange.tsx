// pages/api/addExchange.ts
import { NextApiRequest, NextApiResponse } from "next";
// Import Prisma Client
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            // Handle the form data and add the exchange API to the database
            const { exchangeName, publicKey, secretKey } = req.body;

            // Use Prisma Client to insert data into the database
            await prisma.exchange.create({
                data: {
                    name: exchangeName,
                    apiKey: {
                        create: {
                            publicKey,
                            secretKey,
                        },
                    },
                    users: {
                        connect: {
                            // Add logic to connect to the specific user if needed
                        },
                    },
                },
            });

            res.status(200).json({
                message: "Exchange API added successfully",
            });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
