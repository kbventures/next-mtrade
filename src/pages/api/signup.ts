import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import bcrypt from "bcryptjs";

const signupUserSchema = z.object({
    username: z.string().regex(/^[a-z0-9_-]{3,15}$/g, "Invalid username"),
    password: z.string().min(8, "Password should be minimum 8 characters"),
});

const prisma = new PrismaClient();

export default async function signupUser(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, password } = signupUserSchema.parse(req.body);
    // This console.log is working
    // console.log("username, password", username, password);
    const user = await prisma.user.findUnique({
        where: { username },
    });
    if (user !== null) {
        return res.send({ user: null, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            username,
            password: hashedPassword,
        },
    });

    return res.send({ user: newUser, message: "User created successfully" });
}
