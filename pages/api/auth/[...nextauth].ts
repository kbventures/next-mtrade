import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient, User } from "@prisma/client";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";

const loginUserSchema = z.object({
    username: z.string().regex(/^[a-z0-9_-]{3,15}$/g, "Invalid username"),
    password: z.string().min(5, "Password should be minimum 5 characters"),
});
const prisma = new PrismaClient();

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                username: { type: "text", placeholder: "test@test.com" },
                password: { type: "password", placeholder: "Pa$$w0rd" },
            },
            async authorize(credentials) {
                const { username, password } =
                    loginUserSchema.parse(credentials);
                const user = await prisma.user.findUnique({
                    where: { username },
                });
                if (!user) return null;

                const isPasswordValid = await bcrypt.compare(
                    password,
                    user.password
                );

                if (!isPasswordValid) return null;

                return user;
            },
        }),
    ],
    callbacks: {
        session({ session, token }) {
            // console.log("account ...nextauth", session);
            // console.log("token ...nextauth", token);
            // Create a new session object with the necessary modifications
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    username: token.username,
                },
            };
        },
        jwt({ token, account, user }) {
            // console.log("account ...nexta", account);
            const modifiedToken = {
                ...token,
            };

            if (account) {
                modifiedToken.accessToken = account.access_token;
                modifiedToken.id = user.id;
                modifiedToken.username = (user as User).username;
            }

            return modifiedToken;
        },
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
