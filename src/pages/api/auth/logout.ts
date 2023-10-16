import { signOut } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    if (method === "POST") {
        await signOut({ redirect: false, callbackUrl: "/" }); // You can specify a different redirect URL if needed.
        res.status(200).end();
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
};
